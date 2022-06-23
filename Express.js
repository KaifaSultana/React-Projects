import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Express = ()=>{
    const [users, setUser] =useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3001/user-list").then(({data}) => {
      setUser(data);
  })
})
return(
    <div>
        {
          users.map((user)=>{
            return(
              <div key={user['id']} onClick={()=>navigate(`/profile?id=${user['id']}`)}> {user['id']} - {user['name']}</div>
              )
          })
        }
        
      </div>
)
    }
    export default Express;