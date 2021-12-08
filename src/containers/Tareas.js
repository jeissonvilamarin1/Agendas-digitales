import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export const Tareas = () => {
const [newName, setNewName] = useState("");
const [newTodo, setNewTodo] = useState('');

const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, "users");

const createUser = async () => {
  await addDoc(usersCollectionRef, { name: newName, todo: newTodo });
};

const updateUser = async (id, age) => {

  const userDoc = doc(db, "users", id);
  const newFields = { todo: newTodo};
  await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log(getUsers());
  getUsers();
}, []);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Todo..."
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User</button>
      {users.map((user) => {
        console.log(user)
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Todo: {user.todo}</h1>
            <button
              onClick={() => {
                console.log(user.id)
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Update Todo
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

