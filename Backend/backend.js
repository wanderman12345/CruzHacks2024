import { db } from "./firebaseConfig";
import { doc, setDoc, updateDoc, getDoc, getDocs } from 'firebase/firestore';
import { auth } from "./firebaseConfig";

export const getAllUserInfo = async() => {
    const userCollection = collection(db, "users");
    try{
      console.log("First")
      let data = await getDocs(userCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data()
      }))
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
}
export const setUserInfo = async(userId, data) => {
    const workRef = doc(db, "users", userId);
    try {
        await setDoc(workRef, data);
        console.log("successfully added user info.");
    } catch (err) {
        console.error("error ", err);
    }
}
export async function createUserDb(userId, data){
    const workRef = doc(db, "users", userId);
    try {
        await setDoc(workRef, data);
        console.log("successfully added user info.");
    } catch (err) {
        console.error("error ", err);
    }                                         
}

// Creating a document for Fitness to specify routine
// export async function createFitnessRoutine (userId, data) {
//     console.log("The userId , ", userId)
//     const workRef = doc(db, "Fitness", userId);
//     await setDoc(workRef, data)
//         .then(() => {
//             console.log("successfully added user info.");
//         })
//         .catch((err) => {
//             console.log("error ", err);
//         })
// }

