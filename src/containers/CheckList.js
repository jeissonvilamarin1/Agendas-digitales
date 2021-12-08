import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  ContainerSections,
  HeaderSections,
  ButtonBack,
  HeaderInfo,
  HeaderWelcomeText,
  HeaderWelcomeQuestion,
} from "../styles/styles";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


export const CheckList = () => {
  const [tarea, setTarea] = useState("");

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createTodo = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionRef, { tareas: tarea });
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
    <div>
      <ContainerSections>
        <HeaderSections>
          <Link to="/home">
            <ButtonBack>
              <FontAwesomeIcon icon={faAngleLeft} />
            </ButtonBack>
          </Link>
          <HeaderInfo>
            <HeaderWelcomeText>Check list</HeaderWelcomeText>
            <HeaderWelcomeQuestion>Tu puedes hacerlo</HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <form onSubmit={createTodo}>
          <input
            type="text"
            placeholder="Escribe una tarea..."
            className="checklist-input"
            value={tarea}
            required
            onChange={handleChange}
          />
          <button className="button-add" type="submit">
            Add
          </button>
        </form>
        {users.map((user) => {
          return (
            <div>
              {" "}
              <h1>Todo: {user.tareas}</h1>
            </div>
          );
        })}
      </ContainerSections>
    </div>
  );
};
