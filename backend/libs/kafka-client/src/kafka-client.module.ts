import { DynamicModule, Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_PRODUCER_TOKEN, KafkaProducerService } from './kafka-producer.service';

export interface KafkaClientModuleOptions {
  clientId: string;
  brokers: string[];
}

@Global()
@Module({})
export class KafkaClientModule {
  static register(options: KafkaClientModuleOptions): DynamicModule {
    return {
      module: KafkaClientModule,
      imports: [
        ClientsModule.register([
          {
            name: KAFKA_PRODUCER_TOKEN,
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: options.clientId,
                brokers: options.brokers,
              },
              producer: {
                // acks: 1 → aguarda ACK do líder antes de resolver (padrão do kafkajs)
                // Suficiente para cluster single-node como este ambiente
                allowAutoTopicCreation: true,
              },
            },
          },
        ]),
      ],
      providers: [KafkaProducerService],
      exports: [KafkaProducerService],
    };
  }
}
