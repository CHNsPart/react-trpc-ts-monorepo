import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

export const customConfig: { port: number; origin: string; dbUri: string } = {
  port: 8080,
  origin: process.env.ORIGIN as unknown as string,

  dbUri: process.env.MONGODB_URI as unknown as string,
};

export default customConfig;