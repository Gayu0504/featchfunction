import {useEffect,useState} from 'react';



function FeatchFunction(){

    let [users,setUsers] =useState([]);
    useEffect(
        ()=>{
            fetch("https://reqres.in/api/users").then((result=>{
                result.json().then(res=>{
                    console.log(res.data);
                    setUsers(res.data);
                })
            }))
        }
    )
    return(
        <div>
           <h2> Featch Function </h2>
            <table>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={user.avatar} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
    
}
export default FeatchFunction;