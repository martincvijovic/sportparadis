import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT;

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'db',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'mydb',
});

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Hello from backend!', time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

console.log('Starting backend service');
app.listen(port, () => {
    console.log('Successful start');
    console.log(`Backend listening at http://localhost:${port}`);
});
