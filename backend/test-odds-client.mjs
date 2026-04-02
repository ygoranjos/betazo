import { io } from 'socket.io-client';

const API_GATEWAY_URL = 'http://localhost:3000';
const eventId = process.argv[2];

const socket = io(API_GATEWAY_URL, { transports: ['websocket'] });

socket.on('connect', () => {
  console.log(`[conectado] socket id: ${socket.id}`);

  if (eventId) {
    socket.emit('subscribe_match', { eventId });
    console.log(`[inscrito] aguardando odds do jogo ${eventId}...`);
  } else {
    console.log('[aguardando] nenhum eventId fornecido — conectado mas sem sala');
    console.log('Dica: rode "node test-odds-client.mjs <eventId>" com um ID real do Redis');
    console.log('Para ver IDs disponíveis: redis-cli keys "odds:match:*"');
  }
});

socket.on('odds_updated', (delta) => {
  const timestamp = new Date().toISOString();
  console.log(`\n[${timestamp}] odds_updated — jogo ${delta.eventId}`);
  for (const market of delta.markets) {
    console.log(`  mercado: ${market.name} (${market.id})`);
    for (const outcome of market.outcomes) {
      console.log(`    ${outcome.name.padEnd(15)} ${outcome.price}`);
    }
  }
});

socket.on('disconnect', (reason) => {
  console.log(`[desconectado] ${reason}`);
});

socket.on('connect_error', (err) => {
  console.error(`[erro de conexão] ${err.message}`);
  console.error('Verifique se o api-gateway está rodando na porta 3000');
});
