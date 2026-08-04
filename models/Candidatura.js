import conexao from '../config/conexao.js'

const Candidatura = conexao.Schema({
    status: {
        type: String,
        enum: ['em análise', 'aprovado', 'rejeitado'],
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    aluno: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true,
    },
    vaga: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Vaga',
        required: true,
    },
});

export default conexao.model('Candidatura', Candidatura)