import { Inject, Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { KafkaTopic } from './kafka-topics';

export const KAFKA_PRODUCER_TOKEN = 'KAFKA_PRODUCER';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaProducerService.name);

  constructor(
    @Inject(KAFKA_PRODUCER_TOKEN) private readonly client: ClientKafka,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.client.connect();
    this.logger.log('Kafka producer connected');
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.close();
    this.logger.log('Kafka producer disconnected');
  }

  /**
   * Publica uma mensagem no tópico e aguarda o ACK do broker antes de resolver.
   * Lança erro se o broker não confirmar a entrega.
   */
  async publish(topic: KafkaTopic, payload: unknown): Promise<void> {
    await firstValueFrom(
      this.client.emit(topic, { value: JSON.stringify(payload) }),
    );
    this.logger.debug(`Mensagem publicada no tópico ${topic}`);
  }
}
