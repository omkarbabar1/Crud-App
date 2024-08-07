import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect,useState } from "react";
import { deleteUser, getUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const StyleTable  = styled(Table)`
width:80%;
margin:50px auto 0 auto;
`
const Therow = styled(TableRow)`
    background-color:#1976d2; 
    & > th{
        color:white;
        font-size:20px;
    }
    `
const Btn = styled(Button)`
margin-left:20px;
`
const Allusers = () => {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUserDetails();
    }, [])

    const getUserDetails = async ()=>{
        let response = await getUser();
        console.log(response);
        setUsers(response.data)
    }
    return (
        <StyleTable >
            <TableHead variant="h4">
                <Therow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
                </Therow>
            </TableHead>
            <TableBody>
                    {
                        users.map(user =>(
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                    <Btn variant="contained" component={Link} to={`/edit/${user.id}`}>EDIT</Btn>
                    <Btn  variant="contained" color="secondary" onClick={()=>deleteUser(user.id)}>DELETE</Btn>
                    </TableCell>
                            </TableRow>
                        ))
                    }
            </TableBody>
        </StyleTable>
    );
}
    export default Allusers;