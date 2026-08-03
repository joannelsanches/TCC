import { createServer } from 'http';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


import routes from '../routes/route.js'; // rotas externas
import AlunoRoutes from '../routes/AlunoRoutes.js'; // rotas externas
import VagaRoutes from '../routes/VagaRoutes.js'; // rotas externas
import AuthRoutes from '../routes/AuthRoutes.js';
import EmpresaRoutes from '../routes/EmpresaRoutes.js';
import CandidaturaRoutes from '../routes/CandidaturaRoutes.js';
import ListaRoutes from '../routes/ListaRoutes.js';



const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '../public')));
app.set('views', join(__dirname, '../views'));

// Rotas
app.use(AlunoRoutes)
app.use(VagaRoutes)
app.use(AuthRoutes)
app.use(EmpresaRoutes)
app.use(CandidaturaRoutes)
app.use(ListaRoutes)
app.use(routes)
app.listen(3001)
// Exporta o handler compatível com Vercel
export default app;
