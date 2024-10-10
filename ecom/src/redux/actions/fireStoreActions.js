import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase.config"

export const postData=async(data)=>{
    try {
        const docref=await addDoc(collection(db,"contacts"),data)
        console.log(docref)
    } catch (error) {
        console.log(error)
    }
} 