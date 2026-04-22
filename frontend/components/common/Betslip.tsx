'use client';

import { useEffect, useState } from 'react';
import { useBetslipStore, selectTotalOdds, selectPotentialReturn, selectHasStaleOdds } from '@/store';
import { useIsAuthenticated } from '@/store';
import type { BetslipSelection } from '@/store';
import { useBetslipOddsSync } from '@/hooks';

const SPORT_ICONS: Record<string, string> = {
  soccer: 'icon-football',
  football: 'icon-football',
  basketball: 'icon-basketball',
  tennis: 'icon-tennis',
  baseball: 'icon-baseball',
  ice_hockey: 'icon-hockey',
  handball: 'icon-handball',
};

function getSportIcon(sport: string): string {
  return SPORT_ICONS[sport.toLowerCase()] ?? 'icon-football';
}

function combinations(n: number, k: number): number {
  if (k > n) return 0;
  let result = 1;
  for (let i = 0; i < k; i++) result = (result * (n - i)) / (i + 1);
  return Math.round(result);
}

function EmptyState() {
  return (
    <div style={{ padding: '1.5rem 1rem', textAlign: 'center', opacity: 0.6 }}>
      <p style={{ margin: 0 }}>Nenhuma seleção adicionada.</p>
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem' }}>
        Clique em uma cotação para adicionar.
      </p>
    </div>
  );
}

function ActionButton({
  canBet,
  isAuthenticated,
  hasStaleOdds,
  isSubmitting,
  onPlaceBet,
}: {
  canBet: boolean;
  isAuthenticated: boolean;
  hasStaleOdds: boolean;
  isSubmitting: boolean;
  onPlaceBet: () => void;
}) {
  if (!isAuthenticated) {
    return (
      <button type="button" className="cmn--btn2" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
        <span>Sign In &amp; Bet</span>
      </button>
    );
  }

  const disabled = !canBet || hasStaleOdds || isSubmitting;
  const label = isSubmitting ? 'Aguarde...' : hasStaleOdds ? 'Accept changed odds' : 'Place Bet';

  return (
    <button
      type="button"
      className="cmn--btn2"
      disabled={disabled}
      onClick={onPlaceBet}
      style={{ width: '100%', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
    >
      <span>{label}</span>
    </button>
  );
}

function OddChangedWarning({
  selection,
  onAccept,
}: {
  selection: BetslipSelection;
  onAccept: () => void;
}) {
  if (selection.newOdd === undefined) return null;
  const increased = selection.newOdd > selection.currentOdd;
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(243, 72, 106, 0.12)',
      border: '1px solid var(--button-one)',
      borderRadius: '4px',
      padding: '0.4rem 0.6rem',
      margin: '0.4rem 0',
      gap: '0.5rem',
    }}>
      <span style={{ fontSize: '0.78rem', color: 'var(--button-one)' }}>
        ⚠ Odd changed: {selection.currentOdd.toFixed(2)} →{' '}
        <strong style={{ color: increased ? 'var(--active-color)' : 'var(--button-one)' }}>
          {selection.newOdd.toFixed(2)}
        </strong>
      </span>
      <button
        type="button"
        onClick={onAccept}
        style={{
          background: 'var(--active-color)',
          border: 'none',
          borderRadius: '3px',
          color: 'var(--body-color)',
          fontSize: '0.72rem',
          fontWeight: 700,
          padding: '0.2rem 0.5rem',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        Accept
      </button>
    </div>
  );
}

function SingleSelectionItem({
  selection,
  stake,
  onStakeChange,
  onRemove,
  onAcceptOdd,
}: {
  selection: BetslipSelection;
  stake: number;
  onStakeChange: (v: number) => void;
  onRemove: () => void;
  onAcceptOdd: () => void;
}) {
  const [stakeInput, setStakeInput] = useState('');

  useEffect(() => {
    const parsed = parseFloat(stakeInput);
    onStakeChange(isNaN(parsed) || parsed < 0 ? 0 : parsed);
  }, [stakeInput]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleQuickStake(v: number) {
    setStakeInput(v.toString());
  }

  const payout = stake * selection.currentOdd;
  const isStale = selection.newOdd !== undefined;
  return (
    <>
      <div className="multiple__items" style={isStale ? { borderLeft: '2px solid var(--button-one)' } : {}}>
        <div className="multiple__head">
          <div className="multiple__left">
            <span className="icons"><i className={getSportIcon(selection.sport)}></i></span>
            <span>{selection.matchLabel}</span>
          </div>
          <button
            type="button"
            className="cros"
            onClick={onRemove}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-label="Remove"
          >
            <i className="icon-cross"></i>
          </button>
        </div>
        <div className="multiple__point">
          <span className="pbox">{selection.currentOdd.toFixed(2)}</span>
          <span className="rightname">
            <span className="fc">{selection.teamName}</span>
            <span className="point">{selection.betType}</span>
          </span>
        </div>
        <OddChangedWarning selection={selection} onAccept={onAcceptOdd} />
      </div>
      <div className="total__odds">
        <div className="wrapper">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--signbet)',
            borderRadius: '6px',
            padding: '0.5rem 0.75rem',
            margin: '0.5rem 0',
            border: '1px solid var(--multiborder)',
          }}>
            <span style={{ color: 'var(--textcolor)', fontSize: '0.85rem', flexShrink: 0 }}>$</span>
            <input
              type="text"
              inputMode="decimal"
              value={stakeInput}
              onChange={(e) => setStakeInput(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="Stake amount"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: 'var(--white)',
                caretColor: 'var(--active-color)',
                outline: 'none',
                fontSize: '0.9rem',
                minWidth: 0,
              }}
            />
          </div>
          <div className="buttons">
            {[5, 10, 50].map((v) => (
              <button key={v} type="button" onClick={() => handleQuickStake(v)}>{v}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="possible__pay">
        <span>Possible Payout</span>
        <span>{payout.toFixed(2)} $</span>
      </div>
    </>
  );
}

function SelectionItem({
  selection,
  onRemove,
  onAcceptOdd,
}: {
  selection: BetslipSelection;
  onRemove: () => void;
  onAcceptOdd: () => void;
}) {
  const isStale = selection.newOdd !== undefined;
  return (
    <div className="multiple__items" style={isStale ? { borderLeft: '2px solid var(--button-one)' } : {}}>
      <div className="multiple__head">
        <div className="multiple__left">
          <span className="icons"><i className={getSportIcon(selection.sport)}></i></span>
          <span>{selection.matchLabel}</span>
        </div>
        <button
          type="button"
          className="cros"
          onClick={onRemove}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Remover"
        >
          <i className="icon-cross"></i>
        </button>
      </div>
      <div className="multiple__point">
        <span className="pbox">{selection.currentOdd.toFixed(2)}</span>
        <span className="rightname">
          <span className="fc">{selection.teamName}</span>
          <span className="point">{selection.betType}</span>
        </span>
      </div>
      <OddChangedWarning selection={selection} onAccept={onAcceptOdd} />
    </div>
  );
}

type TabType = 'single' | 'multiple' | 'system';

const Betslip = () => {
  const { selections, removeSelection, clearBetslip, multipleStake, setMultipleStake, acceptOdd, placeBet, isSubmitting } = useBetslipStore();
  const totalOdds      = useBetslipStore(selectTotalOdds);
  const potentialReturn = useBetslipStore(selectPotentialReturn);
  const hasStaleOdds   = useBetslipStore(selectHasStaleOdds);
  const isAuthenticated = useIsAuthenticated();

  useBetslipOddsSync();

  const [activeTab, setActiveTab] = useState<TabType>('multiple');

  // Single: stake por selectionId
  const [singleStakes, setSingleStakes] = useState<Record<string, number>>({});

  // Multiple: estado local controla o display; useEffect sincroniza com o store
  // (evita conflito entre useSyncExternalStore do Zustand e state local do input)
  const [multipleStakeInput, setMultipleStakeInput] = useState('');

  useEffect(() => {
    const parsed = parseFloat(multipleStakeInput);
    setMultipleStake(isNaN(parsed) || parsed < 0 ? 0 : parsed);
  }, [multipleStakeInput]); // eslint-disable-line react-hooks/exhaustive-deps

  // System: stake único local
  const [sharedStake, setSharedStake] = useState(0);
  const [sharedStakeInput, setSharedStakeInput] = useState('');

  useEffect(() => {
    const parsed = parseFloat(sharedStakeInput);
    setSharedStake(isNaN(parsed) || parsed < 0 ? 0 : parsed);
  }, [sharedStakeInput]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (selections.length === 0) {
      setSingleStakes({});
      setMultipleStakeInput('');
      setSharedStakeInput('');
      setSharedStake(0);
    }
  }, [selections.length]); // eslint-disable-line react-hooks/exhaustive-deps

  function switchTab(tab: TabType) {
    if (tab === activeTab) return;
    clearBetslip();
    setActiveTab(tab);
  }

  function handleMultipleQuickStake(v: number) {
    setMultipleStakeInput(v.toString());
  }

  function setSingleStake(selectionId: string, value: number) {
    setSingleStakes((prev) => ({ ...prev, [selectionId]: value }));
  }

  const singleTotalStake = selections.reduce((acc, s) => acc + (singleStakes[s.selectionId] ?? 0), 0);
  const singleCanBet = selections.length > 0 && singleTotalStake > 0;

  // Multiple — calculado pelos seletores do store (totalOdds, potentialReturn)
  const multipleCanBet = selections.length > 0 && multipleStake > 0;

  const systemCombinations = combinations(selections.length, 2);
  const systemTotalStake = sharedStake * systemCombinations;
  const systemCanBet = selections.length >= 3 && sharedStake > 0;

  return (
    <div className="right__site__section display991">
      <div className="betslip__wrap">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <h5 className="betslip__title" style={{ margin: 0 }}>Betslip</h5>
          {selections.length > 0 && (
            <button
              type="button"
              onClick={() => clearBetslip()}
              style={{
                background: 'none',
                border: '1px solid var(--button-one)',
                borderRadius: '4px',
                color: 'var(--button-one)',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.2rem 0.6rem',
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              Clear All
            </button>
          )}
        </div>
        <div className="nav" id="nav-taboo" role="tablist">
          {(['single', 'multiple', 'system'] as TabType[]).map((tab) => (
            <button
              key={tab}
              className={`nav-link${activeTab === tab ? ' active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => switchTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content" id="nav-tabContent">

          {/* ── Single: stake individual por seleção ── */}
          <div
            className={`tab-pane text-white${activeTab === 'single' ? ' show active' : ''}`}
            role="tabpanel"
            tabIndex={0}
          >
            {selections.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="multiple__components">
                {selections.map((s) => (
                  <SingleSelectionItem
                    key={s.selectionId}
                    selection={s}
                    stake={singleStakes[s.selectionId] ?? 0}
                    onStakeChange={(v) => setSingleStake(s.selectionId, v)}
                    onRemove={() => removeSelection(s.selectionId)}
                    onAcceptOdd={() => acceptOdd(s.selectionId)}
                  />
                ))}
                <ActionButton canBet={singleCanBet} isAuthenticated={isAuthenticated} hasStaleOdds={hasStaleOdds} isSubmitting={isSubmitting} onPlaceBet={() => void placeBet(singleTotalStake)} />
              </div>
            )}
          </div>
          <div
            className={`tab-pane text-white${activeTab === 'multiple' ? ' show active' : ''}`}
            role="tabpanel"
            tabIndex={0}
          >
            {selections.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="multiple__components">
                {selections.map((s) => (
                  <SelectionItem key={s.selectionId} selection={s} onRemove={() => removeSelection(s.selectionId)} onAcceptOdd={() => acceptOdd(s.selectionId)} />
                ))}
                <div className="total__odds">
                  <div className="total__head">
                    <h6 className="odd">Total Odds</h6>
                    <span>{totalOdds.toFixed(2)}</span>
                  </div>
                  <div className="wrapper">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--signbet)',
                      borderRadius: '6px',
                      padding: '0.5rem 0.75rem',
                      margin: '0.5rem 0',
                      border: '1px solid var(--multiborder)',
                    }}>
                      <span style={{ color: 'var(--textcolor)', fontSize: '0.85rem', flexShrink: 0 }}>$</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={multipleStakeInput}
                        onChange={(e) => setMultipleStakeInput(e.target.value.replace(/[^0-9.]/g, ''))}
                        placeholder="Stake amount"
                        style={{
                          flex: 1,
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--white)',
                          caretColor: 'var(--active-color)',
                          outline: 'none',
                          fontSize: '0.9rem',
                          minWidth: 0,
                        }}
                      />
                    </div>
                    <div className="buttons">
                      {[5, 10, 50].map((v) => (
                        <button key={v} type="button" onClick={() => handleMultipleQuickStake(v)}>{v}</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="possible__pay">
                  <span>Possible Payout</span>
                  <span>{potentialReturn.toFixed(2)} $</span>
                </div>
                <ActionButton canBet={multipleCanBet} isAuthenticated={isAuthenticated} hasStaleOdds={hasStaleOdds} isSubmitting={isSubmitting} onPlaceBet={() => void placeBet(multipleStake)} />
              </div>
            )}
          </div>
          <div
            className={`tab-pane text-white${activeTab === 'system' ? ' show active' : ''}`}
            role="tabpanel"
            tabIndex={0}
          >
            {selections.length === 0 ? (
              <EmptyState />
            ) : selections.length < 3 ? (
              <div style={{ padding: '1rem', textAlign: 'center', opacity: 0.7 }}>
                <p style={{ margin: 0 }}>Sistema requer mínimo 3 seleções.</p>
                <p style={{ margin: '0.4rem 0 0', fontSize: '0.82rem' }}>
                  Adicione {3 - selections.length} {3 - selections.length === 1 ? 'seleção' : 'seleções'} para continuar.
                </p>
              </div>
            ) : (
              <div className="multiple__components">
                {selections.map((s) => (
                  <SelectionItem key={s.selectionId} selection={s} onRemove={() => removeSelection(s.selectionId)} onAcceptOdd={() => acceptOdd(s.selectionId)} />
                ))}
                <div className="total__odds">
                  <div className="total__head">
                    <h6 className="odd">Sistema 2 de {selections.length}</h6>
                    <span>{systemCombinations} combinações</span>
                  </div>
                  <div className="wrapper">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--signbet)',
                      borderRadius: '6px',
                      padding: '0.5rem 0.75rem',
                      margin: '0.5rem 0',
                      border: '1px solid var(--multiborder)',
                    }}>
                      <span style={{ color: 'var(--textcolor)', fontSize: '0.85rem', flexShrink: 0 }}>$</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={sharedStakeInput}
                        onChange={(e) => setSharedStakeInput(e.target.value.replace(/[^0-9.]/g, ''))}
                        placeholder="Stake amount"
                        style={{
                          flex: 1,
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--white)',
                          caretColor: 'var(--active-color)',
                          outline: 'none',
                          fontSize: '0.9rem',
                          minWidth: 0,
                        }}
                      />
                    </div>
                    <div className="buttons">
                      {[5, 10, 50].map((v) => (
                        <button key={v} type="button" onClick={() => setSharedStakeInput(v.toString())}>{v}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>
                    <span>Total apostado</span>
                    <span>{systemTotalStake.toFixed(2)} $</span>
                  </div>
                </div>
                <div className="possible__pay">
                  <span>Payout máximo</span>
                  <span>{(sharedStake * totalOdds).toFixed(2)} $</span>
                </div>
                <ActionButton canBet={systemCanBet} isAuthenticated={isAuthenticated} hasStaleOdds={hasStaleOdds} isSubmitting={isSubmitting} onPlaceBet={() => void placeBet(systemTotalStake)} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Betslip;
