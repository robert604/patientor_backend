import express from 'express';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const PORT = 3001;

app.get('/api/ping',(req,res) => {
  console.log('got a ping');
  res.send('pong');
})

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})