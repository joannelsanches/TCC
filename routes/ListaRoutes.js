import express from 'express';
import Quarto from '../models/Quarto.js';
import Servico from '../models/Candidatura.js';

const router = express.Router();

router.get('/lista', async(req, res) => {
    const quartos = await Quarto.find({}).populate("tipquarto");
    const servicos = await Servico.find({});

    res.render("lista", {
        quartos,
        servicos
    });
});

export default router;
