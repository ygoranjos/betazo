import Link from 'next/link';
import type { LiveMatch } from '@/hooks';

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getOdds(
  match: LiveMatch,
  marketKey: string,
  side: string,
): string {
  const market = match.markets.find((m) => m.id === marketKey);
  const outcome = market?.outcomes.find((o) =>
    o.selectionId.endsWith(`:${side}`),
  );
  return outcome?.price != null ? outcome.price.toFixed(2) : '-';
}

export function formatTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '--:--';
  }
}

/**
 * Returns a human-readable date+time label for a match start time.
 * - Same calendar day  → "Hoje / 21:00"
 * - Next calendar day  → "Amanhã / 21:00"
 * - Within 7 days      → "Sáb / 21:00"
 * - Further out        → "18/04 / 21:00"
 */
export function formatMatchDate(iso: string): string {
  try {
    const match = new Date(iso);
    const now = new Date();

    // Strip time — compare calendar dates only
    const matchDay = new Date(match.getFullYear(), match.getMonth(), match.getDate());
    const today    = new Date(now.getFullYear(),   now.getMonth(),   now.getDate());
    const diffDays = Math.round((matchDay.getTime() - today.getTime()) / 86_400_000);

    const time = match.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    if (diffDays === 0) return `Hoje / ${time}`;
    if (diffDays === 1) return `Amanhã / ${time}`;
    if (diffDays > 1 && diffDays < 7) {
      const weekday = match.toLocaleDateString('pt-BR', { weekday: 'short' });
      // Capitalize first letter, remove trailing dot  (e.g. "sáb." → "Sáb")
      const label = weekday.charAt(0).toUpperCase() + weekday.slice(1).replace('.', '');
      return `${label} / ${time}`;
    }
    const date = match.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    return `${date} / ${time}`;
  } catch {
    return '--/-- / --:--';
  }
}

// ─── Empty / Loading states ──────────────────────────────────────────────────

export function LoadingRow() {
  return (
    <div className="table__items b__bottom">
      <p style={{ padding: '1rem', opacity: 0.6 }}>Carregando jogos...</p>
    </div>
  );
}

export function EmptyRow({ message = 'Nenhum jogo disponível no momento.' }: { message?: string }) {
  return (
    <div className="table__items b__bottom">
      <p style={{ padding: '1rem', opacity: 0.6 }}>{message}</p>
    </div>
  );
}

// ─── Team cell (fix de alinhamento para nomes longos) ────────────────────────

const teamCellStyle: React.CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '130px',
};

// ─── Pré-jogo (1X2 + Over/Under) ────────────────────────────────────────────

export function PreMatchRow({ match }: { match: LiveMatch }) {
  return (
    <div className="table__items b__bottom">
      <div className="t__items">
        <div className="t__items__left">
          <h6 style={teamCellStyle}>{match.homeTeam}</h6>
          <span className="text" style={teamCellStyle}>{match.awayTeam}</span>
          <p>
            <Link href="#0" style={teamCellStyle}>{match.competition}</Link>
            <Link href="#0" className="today">
              {formatMatchDate(match.startTime)}
            </Link>
          </p>
        </div>
      </div>
      <div className="mart__point__items">
        <Link href="#0" className="twing twing__right">
          <i className="icon-twer"></i>
        </Link>
        <Link href="#0" className="mart opo">
          <i className="icon-pmart"></i>
        </Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'home')}</Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'draw')}</Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'away')}</Link>
      </div>
      <div className="cart__point cart__point__two">-</div>
      <div className="mart__point__two">
        <div className="mart__point__left">
          <Link href="#0" className="point__box">{getOdds(match, 'totals', 'over')}</Link>
          <Link href="#0" className="point__box">{getOdds(match, 'totals', 'under')}</Link>
        </div>
        <div className="mart__point__right">
          <Link href="#0" className="point__box bg__none">
            <i className="icon-star star"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Jogo ao vivo genérico (1X2 + Over/Under) ───────────────────────────────

export function LiveMatchRow({ match }: { match: LiveMatch }) {
  return (
    <div className="table__items b__bottom">
      <div className="t__items">
        <div className="t__items__left">
          <h6 style={teamCellStyle}>{match.homeTeam}</h6>
          <span className="text" style={teamCellStyle}>{match.awayTeam}</span>
          <p>
            <Link href="#0">Live</Link>
            <span style={teamCellStyle}>{match.competition}</span>
          </p>
        </div>
      </div>
      <div className="cart__point">
        <span>-</span>
        <span>-</span>
      </div>
      <div className="mart__point__items">
        <Link href="#0" className="twing twing__right">
          <i className="icon-twer"></i>
        </Link>
        <Link href="#0" className="mart">
          <i className="icon-pmart"></i>
        </Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'home')}</Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'draw')}</Link>
        <Link href="#0box" className="point__box">{getOdds(match, 'h2h', 'away')}</Link>
      </div>
      <div className="cart__point cart__point__two">-</div>
      <div className="mart__point__two">
        <div className="mart__point__left">
          <Link href="#0" className="point__box">{getOdds(match, 'totals', 'over')}</Link>
          <Link href="#0" className="point__box">{getOdds(match, 'totals', 'under')}</Link>
        </div>
        <div className="mart__point__right">
          <Link href="#0" className="point__box bg__none">
            <i className="icon-star star"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Next-to-go (1X2 inline) ────────────────────────────────────────────────

export function NextToGoRow({ match }: { match: LiveMatch }) {
  return (
    <div className="table__items b__bottom">
      <div className="t__items">
        <div className="t__items__left t__items__left__nextogo">
          <div className="t__items__icon">
            <i className="icon-football"></i>
          </div>
          <div className="content">
            <span className="text" style={teamCellStyle}>{match.homeTeam}</span>
            <h6 style={teamCellStyle}>{match.awayTeam}</h6>
          </div>
        </div>
      </div>
      <div className="mart__point__two mart__pint__nextgo">
        <div className="mart__point__left">
          <Link href="#0" className="point__box">
            <span className="point__1">1</span>
            <span>{getOdds(match, 'h2h', 'home')}</span>
          </Link>
          <Link href="#0" className="point__box">
            <span className="point__1">X</span>
            <span>{getOdds(match, 'h2h', 'draw')}</span>
          </Link>
          <Link href="#0" className="point__box">
            <span className="point__1">2</span>
            <span>{getOdds(match, 'h2h', 'away')}</span>
          </Link>
        </div>
        <div className="mart__point__right">
          <Link href="#0" className="point__box-text point__box__nextto">
            <span>{formatMatchDate(match.startTime)}</span>
            <span className="icons">
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
