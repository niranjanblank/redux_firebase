import { onSnapshot, doc, collection, query } from "firebase/firestore"

// import { userActions } from "./userSlice"

import {db} from '../firebase-config'
import { userActions } from "./userSlice";

const fetchUsersData = () => { 
    return (dispatch) => {
        const q = query(collection(db, "users"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            // console.log(doc.data().name)
            data.push({name: doc.data().name,age: doc.data().age,id: doc.id})
          });
          dispatch(userActions.getData(data))
        });    
    }
}

export default fetchUsersData;