
import dotenv from 'dotenv';

dotenv.config();

export default {
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:4000',
};
