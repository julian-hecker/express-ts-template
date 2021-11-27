import dotenv from 'dotenv';

dotenv.config();

export const env = process.env.NODE_ENV;

export const config = {
  port: process.env.PORT,
};
