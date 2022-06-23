import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
 const Profile = ()=>{
    const [user, setUser] = useState();
    const [params] = useSearchParams();
    const id = params.get('id');
    useEffect(()=>{
        if(id!==null){
            axios.get(`http://localhost:3001/user-list/${id}`).then(({data})=>{
                setUser(data);
            })
        }
    },[]);
    return(
        <div>
            <h1>Name: {user?.name}</h1>
            <h2>Occupation: {user?.occupation}</h2>
            <h3>Id: {user?.id}</h3>
        </div>
    )
 }
 export default Profile;