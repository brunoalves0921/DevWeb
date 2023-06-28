

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenuV1"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"
import ListarAluno from "./aluno/Listar"
import ListarAlunoAprovado from "./aluno/ListarAprovado"
import EditarAluno from "./aluno/Editar"
import CadastrarAluno from "./aluno/Cadastrar"
import LoginPage from "./LoginPage"


const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                    {/* rota para listar os alunos aprovados */}
                    <Route path="listarAprovado" element={<ListarAlunoAprovado/>}/> 
                    <Route path="login" element={<LoginPage/>}/>

                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage