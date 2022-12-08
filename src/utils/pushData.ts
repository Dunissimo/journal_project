import { doc, setDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import usersData from "./fakeData.json";

// Add a new document in collection "cities"
export const pushData = async () => {
  const { users } = usersData;
  await setDoc(doc(db, "users", "list"), { users });
};

// pushData();
