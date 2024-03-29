import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Editar = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    // const professores = [
    //     { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:false,es:true}},
    //     { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD", ai:{cg:false,mc:true,al:false,es:false} },
    //     { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:true,es:false} },
    //     { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT", ai:{cg:false,mc:true,al:false,es:false} },
    //     { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST", ai:{cg:false,mc:true,al:true,es:false} }
    // ]

    // function getProfessorById(id) {
    //     for(let i=0;i<professores.length;i++)
    //         if(id == professores[i].id) return professores[i]
    //     return null
    // }

    const [nome, setNome] = useState("") //textfield
    const [curso,setCurso] = useState("CC") //select
    const [ira, setIra] = useState("0.0") //textfield

    //como [] está vazio, o useEffect funciona como um construtor!
    useEffect(
        () => {

            axios.get(`http://localhost:3005/alunos/recuperar/${id}`)
                .then((response) => {
                    let aluno = response.data
                    setNome(aluno.nome)
                    setCurso(aluno.curso)
                    setIra(aluno.ira)
                }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.put(`http://localhost:3005/alunos/atualizar/${id}`,aluno)
        .then((response)=>{
            navigate("/listarAluno")
        })
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno {id}
            </Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />
                <FormControl sx={{marginTop:2, width:"100%"}} required>
                    <InputLabel id="select-curso-label">Curso</InputLabel>
                    <Select
                        labelId="select-curso-label"
                        label="Curso"
                        // quando for editar, o valor que será mostrado inicialmente é o valor que está no estado atual
                        value={curso}
                        // quando o usuário selecionar um novo valor, o estado será atualizado
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                        <MenuItem value="CC">Ciência da Computação</MenuItem>
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="ES">Engenharia de Software</MenuItem>
                        <MenuItem value="SI">Sistemas de Informação</MenuItem>
                        <MenuItem value="EC">Engenharia de Computação</MenuItem>
                        <MenuItem value="RC">Redes de Computadores</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="ira"
                    label="IRA"
                    value={ira}
                    name="ira"
                    type="number"
                    inputProps={
                        {
                            maxLenght: 10,
                            step: "0.1"
                        }
                    }
                    onChange={(e) => setIra(parseFloat(e.target.value))}
                />

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar