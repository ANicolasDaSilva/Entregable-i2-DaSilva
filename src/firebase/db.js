/*

import { app } from "./firebase"

const db = getFirestore(app)

export const getProducts = async() => {
    const documents = await getDocs(collection(db, "products"))
    const products = [];
    document.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id
        })
    })
    return products;
} 

*/