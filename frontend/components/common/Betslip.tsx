'use client';

import { useEffect, useState } from 'react';
import { useBetslipStore, selectTotalOdds, selectPotentialReturn } from '@/store';
import { useIsAuthenticated } from '@/store';
import type { BetslipSelection } from '@/store';

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

function ActionButton({ canBet, isAuthenticated }: { canBet: boolean; isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    return (
      <button type="button" className="cmn--btn2" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
        <span>Sign In &amp; Bet</span>
      </button>
    );
  }
  return (
    <button
      type="button"
      className="cmn--btn2"
      disabled={!canBet}
      style={{ width: '100%', border: 'none', cursor: canBet ? 'pointer' : 'not-allowed', opacity: canBet ? 1 : 0.5 }}
    >
      <span>Place Bet</span>
    </button>
  );
}

function SingleSelectionItem({
  selection,
  stake,
  onStakeChange,
  onRemove,
}: {
  selection: BetslipSelection;
  stake: number;
  onStakeChange: (v: number) => void;
  onRemove: () => void;
}) {
  const payout = stake * selection.currentOdd;
  return (
    <>
      <div className="multiple__items">
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
      </div>
      <div className="total__odds">
        <div className="wrapper">
          <div className="result">
            <span>Stake amount, $</span>
            <span className="result">{stake.toFixed(2)} $</span>
          </div>
          <div className="buttons">
            {[5, 10, 50].map((v) => (
              <button key={v} type="button" onClick={() => onStakeChange(v)}>{v}</button>
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
}: {
  selection: BetslipSelection;
  onRemove: () => void;
}) {
  return (
    <div className="multiple__items">
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
    </div>
  );
}

type TabType = 'single' | 'multiple' | 'system';

const Betslip = () => {
  const { selections, removeSelection, clearBetslip, multipleStake, setMultipleStake } = useBetslipStore();
  const totalOdds = useBetslipStore(selectTotalOdds);
  const potentialReturn = useBetslipStore(selectPotentialReturn);
  const isAuthenticated = useIsAuthenticated();

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

  function switchTab(tab: TabType) {
    if (tab === activeTab) return;
    clearBetslip();
    setSingleStakes({});
    setMultipleStakeInput('');
    setSharedStake(0);
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
        <h5 className="betslip__title">Betslip</h5>
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
                  />
                ))}
                <ActionButton canBet={singleCanBet} isAuthenticated={isAuthenticated} />
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
                  <SelectionItem key={s.selectionId} selection={s} onRemove={() => removeSelection(s.selectionId)} />
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
                <ActionButton canBet={multipleCanBet} isAuthenticated={isAuthenticated} />
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
                  <SelectionItem key={s.selectionId} selection={s} onRemove={() => removeSelection(s.selectionId)} />
                ))}
                <div className="total__odds">
                  <div className="total__head">
                    <h6 className="odd">Sistema 2 de {selections.length}</h6>
                    <span>{systemCombinations} combinações</span>
                  </div>
                  <div className="wrapper">
                    <div className="result">
                      <span>Stake por combinação, $</span>
                      <span className="result">{sharedStake.toFixed(2)} $</span>
                    </div>
                    <div className="buttons">
                      {[5, 10, 50].map((v) => (
                        <button key={v} type="button" onClick={() => setSharedStake(v)}>{v}</button>
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
                  <span>{(sharedStake * multipleOdds).toFixed(2)} $</span>
                </div>
                <ActionButton canBet={systemCanBet} isAuthenticated={isAuthenticated} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Betslip;
