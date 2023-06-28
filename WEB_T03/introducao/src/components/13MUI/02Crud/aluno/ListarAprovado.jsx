import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Typography,
  Table,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const Listar = () => {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3005/alunos/listar")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteAlunoById(_id) {
    if (window.confirm("Deseja Excluir ? " + _id)) {
      axios
        .delete(`http://localhost:3005/alunos/remover/${_id}`)
        .then((response) => {
          const novaLista = alunos.filter((aluno) => aluno._id !== _id);
          setAlunos(novaLista);
        })
        .catch((error) => console.log(error));
    }
  }

  // função para calcular a média da turma, será usada para destacar os alunos com IRA abaixo da média
  function calcularMediaDaTurma() {
    if (alunos.length === 0) {
      return 0;
    }

    const soma = alunos.reduce((total, aluno) => total + aluno.ira, 0);
    return soma / alunos.length;
  }

  // função para filtrar os alunos com IRA acima da média
  const alunosFiltrados = alunos.filter((aluno) => aluno.ira >= calcularMediaDaTurma());

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Listar Alunos Aprovados
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
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
            {/*  mapa para exibir os alunos com IRA acima da média */}
            {alunosFiltrados.map((aluno) => (
              <StyledTableRow key={aluno._id}>
                <StyledTableCell>{aluno._id}</StyledTableCell>
                <StyledTableCell>{aluno.nome}</StyledTableCell>
                <StyledTableCell>{aluno.curso}</StyledTableCell>
                <StyledTableCell>{aluno.ira}</StyledTableCell>
                <StyledTableCell>
                  <Box>
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      component={Link}
                      to={`/editarAluno/${aluno._id}`}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => deleteAlunoById(aluno._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableBody>
            {/*  linha para exibir a média da turma */}
            <StyledTableCell style={{ color: "black" }} colSpan={5} align="center">
              MÉDIA ARITIMÉTICA DO IRA GERAL:{" "}
              {Number.isNaN(calcularMediaDaTurma()) ? (
                "Não há nenhum aluno cadastrado"
              ) : (
                <span style={{ fontWeight: "bold" }}>{calcularMediaDaTurma().toFixed(2)}</span>
              )}
            </StyledTableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default Listar;
