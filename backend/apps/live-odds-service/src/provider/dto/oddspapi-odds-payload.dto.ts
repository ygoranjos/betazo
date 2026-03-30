// ─── Estrutura real do canal "odds" da OddsPapi ───────────────────────────────
//
// Hierarquia:
//   bookmakerOdds
//     → [bookmaker slug]
//       → markets
//         → [marketId numérico como string]
//           → outcomes
//             → [outcomeId numérico como string]
//               → players
//                 → "0"  (playerId "0" = odd base; outros IDs = players nomeados)
//
// Todos os campos são delta — apenas o que mudou é enviado.

export interface OddspapiOddsPlayer {
  price: number;
  priceFractional?: string;
  priceAmerican?: string;
  active?: boolean;
  marketActive?: boolean;
  playerId: string;
  playerName?: string;
  bookmakerOutcomeId?: string;
  changedAt?: number;
  oddsId?: string; // formato: "fixtureId:bookmaker:outcomeId:playerId"
}

export interface OddspapiOddsOutcome {
  outcomeId: number;
  players: Record<string, OddspapiOddsPlayer>; // key = playerId ("0" = base)
}

export interface OddspapiOddsMarket {
  marketId: number;
  outcomes: Record<string, OddspapiOddsOutcome>; // key = outcomeId como string
}

export interface OddspapiBookmakerOdds {
  bookmaker: string;
  bookmakerFixtureId?: string;
  markets: Record<string, OddspapiOddsMarket>; // key = marketId como string
}

export interface OddspapiOddsPayload {
  fixtureId: string;
  bookmakerOdds: Record<string, OddspapiBookmakerOdds>; // key = bookmaker slug
}
