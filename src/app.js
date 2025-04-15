import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json())

//criar rota raiz
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Aqui você faria a verificação com banco de dados, etc.
    if (email === 'teste@email.com' && password === '123456') {
      return res.json({ mensagem: 'Login OK', token: 'abc123' });
    }
  
    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
  });
export default app;