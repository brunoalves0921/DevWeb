const AlunoModel = require("../models/aluno.models.mongo")

class AlunoService{

    static list(request,response){
        AlunoModel.find()
        .then(
            (alunos) => {
                response.status(201).json(alunos)
            }
        )
    }

    static register(request,response){
        AlunoModel.create(request.body)
        .then(
            (alunos) => {
                response.status(201).json(alunos)
            }
        )
    }

    static delete(request,response){
        AlunoModel.findByIdAndDelete(request.params.id)
        .then(
            (alunos) => {
                response.status(201).json(alunos)
            }
        )
    }

    static retrieve(request,response){
        AlunoModel.findById(request.params.id)
        .then(
            (alunos) => {
                response.status(201).json(alunos)
            }
        )
    }

    static update(request,response){
        AlunoModel.findByIdAndUpdate(
                request.params.id,
                request.body,
                {"new":true})
        .then(
            (alunos) =>{
                response.status(201).json(alunos)
            }
        )
    }

}

module.exports = AlunoService