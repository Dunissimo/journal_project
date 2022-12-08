import { collection, getDocs } from "firebase/firestore";
import { loadSubject, loadSubjects } from "../redux/slices/subjectsSlice";
import { loadUsers } from "../redux/slices/usersSlice";
import { AppDispatch } from "../redux/store";
import { ISubject } from "../utils/interfaces";
import { db } from "./firebase";

export const getSubjects = async (dispatch: AppDispatch) => {
  const querySnapshot = await getDocs(collection(db, "subjects"));
  querySnapshot.forEach((doc) => {
    dispatch(loadSubjects(doc.data().subjects));
  });
};

export const getSubject = async (dispatch: AppDispatch, id: any) => {
  const querySnapshot = await getDocs(collection(db, "subjects"));
  querySnapshot.forEach((doc) => {
    const t = doc.data().subjects;
    dispatch(loadSubject(t.find((sb: ISubject) => sb.id === id)));
  });
};

export const getUsers = async (dispatch: AppDispatch) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    dispatch(loadUsers(doc.data().users));
  });
};
