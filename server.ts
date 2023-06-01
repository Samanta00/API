import app from './src/app'
const PORT = 8081 || process.env.PORT;

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));