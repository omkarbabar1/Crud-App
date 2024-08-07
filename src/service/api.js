
import axios from 'axios';


const API_URL ='http://localhost:8080'

export const addUsr = async (User) =>{
    try{
     return await axios.post(`http://localhost:8080/user`,User)
    }catch(error){
        console.log("Add User API Problem")
    }
}

export const getUser = async (User) =>{
    try{
        return await axios.get(`http://localhost:8080/all`,User)
    }catch(error){
        console.log("All User API Problem",error)
    }
}

export const getUserId = async (id) =>{

    try{
        return await axios.get(`${usersUrl}/users/${id}`);
    }catch(error){
        console.log("edit User API Problem ",error)
    }
}

export const editUser = async (id, user) => {
    try{
        return await axios.put(`${usersUrl}/user`, user)
    }catch(error){
        console.log("edit User API Problem ",error)
    }
}

export const deleteUser = async (id) =>{
    try{
        return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log("delete User API Problem ",error)
    }
}
