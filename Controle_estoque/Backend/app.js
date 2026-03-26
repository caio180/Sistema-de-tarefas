import express from 'express';
import Database  from 'better-sqlite3';
const app = express();
const db = new Database('banco.db')



app.get('/', (req, res) => {



});