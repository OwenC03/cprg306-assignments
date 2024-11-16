import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

const getItems = async (userId) => {
    try {
      // Reference to the user's items subcollection
      const itemsRef = collection(db, "users", userId, "items");
      
      // Get all documents in the subcollection
      const querySnapshot = await getDocs(itemsRef);
      
      // Process documents into an array
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
  
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw new Error("Unable to fetch items. Please try again.");
    }
  };

  const addItem = async (userId, item) => {
    try {
      // Reference to the user's items subcollection
      const itemsRef = collection(db, "users", userId, "items");
      
      // Add the new item to Firestore
      const docRef = await addDoc(itemsRef, item);
      
      return docRef.id; // Return the document ID of the new item
    } catch (error) {
      console.error("Error adding item:", error);
      throw new Error("Unable to add item. Please try again.");
    }
  };

  const deleteItem = async (userId, itemId) => {
    try{

        console.log("User Id:", userId);
        console.log("Item Id:", itemId);

        if(!userId || !itemId){
            console.error("Missing userId or itemId, cant delete the item.");
            return;
        }
        
        const itemDoc = doc(db, "users", userId, "items", itemId);
        console.log("Deleting document:", itemDoc);

        await deleteDoc(itemDoc)
    }catch (error){
        console.error("Error deleting item:", error);
        throw new Error("Unable to delete item. Please try again.");
    }
  };


  export { getItems, addItem, deleteItem };
