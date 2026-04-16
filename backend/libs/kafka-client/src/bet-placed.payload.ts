export interface BetPlacedPayload {
  betId: string;
  userId: string;
  stake: number;
  totalOdd: number;
  selections: {
    eventId: string;
    marketKey: string;
    selectionId: string;
    price: number;
  }[];
}
