import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
        nome: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
    enum: ["aluno", "empresa", "admin"],
    required: true,
    }
});

export default conexao.model('Aluno',Aluno)