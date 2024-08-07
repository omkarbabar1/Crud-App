
import { useState } from "react";

import { FormControl, FormGroup, InputLabel,Input,Typography, Button, styled } from "@mui/material";

import { addUsr } from "../service/api";

import {useNavigate} from  "react-router-dom"


const Contanier =styled(FormGroup)`
 width: 50%;
 margin:5% auto 0 auto;
 & > div{
 margin-top:20px;
 }
`

const initalvalues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUsr = () => {

    const [User,setUser] = useState(initalvalues);
    const navigate = useNavigate(); 

    const onValueChange = (e) => {
        setUser({...User,[e.target.name]:e.target.value})
        console.log(User)
    }

    const addUserDetails = async() => {
        await addUsr(User);
        navigate('/all')
    }

    return (
        <Contanier>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Contanier>
    );
}
    export default AddUsr;