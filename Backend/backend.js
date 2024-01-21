import { db } from "./firebaseConfig";
import { doc, setDoc, updateDoc, getDoc, getDocs, collection } from 'firebase/firestore';

export const getAllUserInfo = async() => {
    const userCollection = collection(db, "users");
    try{
      console.log("First");
      let data = await getDocs(userCollection);
      // const filteredData = data.docs.map((doc) => ({
      // //   ...doc.data()r
      // }))
    //   console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
}
export const setUserInfo = async(userId, data) => {
    console.log(data);
    const workRef = doc(db, "users", userId);
    await setDoc(workRef, data)
        .then(() => {
            console.log("successfully added user info.");
        })
        .catch((err) => {
            console.log("error ", err);
        })
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

