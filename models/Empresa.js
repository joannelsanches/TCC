import conexao from '../config/conexao.js'

const Empresa = conexao.Schema({
    usuario: {
        type:conexao.Types.ObjectId, 
        ref: 'Usuario',
        required:true
    },
    cnpj: {
        type: String,
        required: true
    },
    nomeEmpresa: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    logo:{
        type: Image,
        required: true
    }

});

export default conexao.model('Empresa',Empresa)