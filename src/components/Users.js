import React, { useEffect, useState } from "react";
import fetchUsersData from "../store/userActions";
import { useSelector } from "react-redux";
import {db} from '../firebase-config'
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
  
const Users = () => {

    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)

    // fetchUsersData();
    // fetch user data from reducer
    const users = useSelector((state)=> state.user.data)

    
  const createUser = async () => {
    await addDoc(collection(db,"users"),{ name: newName, age: Number(newAge) })
  }

  const deleteUser = async(id) => {
    const userDoc = doc(db, "users",id)
    await deleteDoc(userDoc)
  }

  const updateUser = async(id, age) => {
    const userDoc = doc(db, "users",id)
    const newFields = {age:age+1}
    await updateDoc(userDoc,newFields)
  }


    return ( 
        <div>
         <div className="App">
            <input type="text" placeholder='Name' 
            onChange={(event)=>{setNewName(event.target.value)}}></input>
            <input type="number" placeholder='Age'
            onChange={(event)=>{setNewAge(event.target.value)}}
            ></input>
            <button onClick={createUser}>Create User</button>
            {users.map((user)=> {
                return (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                    <button onClick={()=>{updateUser(user.id, user.age)}}> Increase Age</button>
                    <button onClick={()=>deleteUser(user.id)}>Delete User</button>
                </div>
                )
            })}
            </div>
        </div>
     );
}
 
export default Users;