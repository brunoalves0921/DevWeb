import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { red } from "@mui/material/colors";
import { Colorize } from "@mui/icons-material";

const Listar = () => {

//     const professores = [
//         { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
//         { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
//         { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
//         { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
//         { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" }
//     ]
    const [alunos,setAlunos] = useState([])
    const navigate = useNavigate()

    useEffect(
        ()=>{
            axios.get("http://localhost:3005/alunos/listar")
            .then(
                (response)=>{
                    // console.log(response)
                    setAlunos(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteAlunoById(_id) {
        if(window.confirm("Deseja Excluir ? " + _id)){
            axios.delete(`http://localhost:3005/alunos/remover/${_id}`)
            .then((response)=>{
                const novaLista = alunos.filter(alunos=>alunos._id!==_id)
                setAlunos(novaLista)

            })
            .catch(error=>console.log(error))
        }
    }
    //função para calcular a média da turma, será usada para destacar os alunos com IRA abaixo da média
    function calcularMediaDaTurma() {
        let soma = 0
        alunos.forEach(
            (aluno)=>{
                soma += aluno.ira
            }
        )
        return soma/alunos.length
    }
    
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            {/* verifica se o IRA do aluno é menor que a média da turma, se for, destaca o aluno */}
                                            {/*  destacado será usado para colorir o nome do aluno, destacadoBonus será usado para colorir a linha inteira */}
                                            <StyledTableCell className={aluno.ira < calcularMediaDaTurma() ? "destacadoBonus" : ""} align="center">{aluno._id}</StyledTableCell>
                                            <StyledTableCell className={aluno.ira < calcularMediaDaTurma() ? "destacado" : ""}>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell className={aluno.ira < calcularMediaDaTurma() ? "destacadoBonus" : ""}>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell className={aluno.ira < calcularMediaDaTurma() ? "destacadoBonus" : ""}>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell className={aluno.ira < calcularMediaDaTurma() ? "destacadoBonus" : ""}>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                    <TableBody>
                        {/*  cria uma linha fixa no final da tabela para mostrar a média da turma, e se não houver nenhum aluno cadastrado, mostra uma mensagem */}
                    <StyledTableCell style={{ color: "black" }} colSpan={5} align="center">
                        MÉDIA ARITIMÉTICA DO IRA GERAL:{" "}
                        {Number.isNaN(calcularMediaDaTurma()) ? ("Não há nenhum aluno cadastrado") : (
                            <span style={{ fontWeight: "bold" }}>{calcularMediaDaTurma().toFixed(2)}</span>
                        )}
            </StyledTableCell>

                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    // a classe destacado será usada para colorir o nome do aluno
    '&.destacado': {
        color: 'red',
        backgroundColor: red[100]
        
    },   
    // a classe destacadoBonus será usada para colorir a linha inteira do aluno 
    '&.destacadoBonus': {
        backgroundColor: red[100]

        
    },
    
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default Listar