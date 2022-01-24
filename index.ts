import express from 'express'

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping',(req,res) => {
  console.log('got a ping');
  res.send('pong');
})

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})