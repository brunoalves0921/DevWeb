import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Logar = () => {

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        const login = { user, pass };
        axios.post("http://localhost:3005/login", login)
        .then((response) => {
            if(response.data.message){
                alert("Logado com sucesso!")
                navigate("/listarAluno")
            }else{
                alert("Usuário ou senha inválidos!")
            }

        })
        .catch((error) => console.log(error));
    }



    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Login
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Usuário"

                    id="user"
                    name="user"
                    onChange={(event)=>setUser(event.target.value)}
                    
                />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Senha"

                    id="pass"
                    name="pass"
                    onChange={(event)=>setPass(event.target.value)}
                    
                />

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                        
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Logar