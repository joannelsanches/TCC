import conexao from '../config/conexao.js'

const Vaga = conexao.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    requisitos: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    empresa: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },

    
});

export default conexao.model('Vaga', Vaga)