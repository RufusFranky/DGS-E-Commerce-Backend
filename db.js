import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// ✅ Use only the connection string in production
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Neon DB
});

export default pool;
