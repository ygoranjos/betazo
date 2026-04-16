export const KAFKA_TOPICS = {
  BET_PLACED: 'BET_PLACED',
  BET_SETTLED: 'BET_SETTLED',
} as const;

export type KafkaTopic = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];
