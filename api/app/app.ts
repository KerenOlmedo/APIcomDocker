import express, { Request, Response } from "express";
import { findHistoric, createHistoric } from "./repository";

const app = express();
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
 const historics = await findHistoric()
 res.send(historics).status(200)
});

app.post('/', async (req: Request, res: Response) => {
  const {cep} = req.body
  
  await createHistoric(cep)
  res.send("Historico criado com sucesso!").status(201)

})



app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000!');
});
