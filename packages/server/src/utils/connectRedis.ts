import { createClient } from 'redis';
import colors from 'colors';

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log(colors.bold('\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'));
    console.log(('🔥 '+ colors.bold.bgRed.white(' Redis Client Connected ')+ ' 🔥'));
    console.log(colors.bold(('🔥 ========>'+ colors.bold.bgRed.white(' 6379 ')+ '<======== 🔥')));
    console.log(colors.bold('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'));
    redisClient.set(
      'tRPC',
      '??Welcome to rRPC with React.js, Express and Typescript!'
    );
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;
