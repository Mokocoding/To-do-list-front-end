import React, {createContext, useState} from "react";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
   const [todos, setTodos] = useState([]);

   const baseURL = 'http://3.35.134.247:3000/';

   const addNewTask = (description) => {
      const createData = {
         description: description,
         target_date: "",
      };

      const option = {
         method: "POST",
         headers: {
            "Content-type": "application/json; charset=utf-8",
         },
         body:JSON.stringify(createData),
      };

      fetch(`${baseURL}api/posts`, option)
         .then((res) => {
            if (!res.ok) {
               throw new Error("할 일을 추가하는데 실패했습니다.");
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            setTodos([...todos, data]);
         })
         .catch((err) => console.log(err));
   };

   const deleteTodo = (id) => {
      const option = {
         method: "DELETE",
         headers: {
            "Content-type": "application/json; charset=utf-8",
         },
      };

      fetch(`${baseURL}api/posts/${id}`, option)
         .then((res) => {
            if (!res.ok) {
               throw new Error("할 일을 삭제하는데 실패했습니다.");
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            setTodos(todos.filter((todo) => todo.id !== id));
         })
         .catch((err) => console.log(err));
   };

   const handleEditSave = (id, editedText) => {
      if (editedText.trim() !== "") {
         const updateData = {
            description: editedText,
            target_date: "",
         };

         const option = {
            method: "PATCH",
            headers: {
               "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(updateData),
         };

         fetch(`${baseURL}api/posts/${id}`, option)
         .then((res) => {
            if (!res.ok) {
               throw new Error("할 일을 수정하는데 실패했습니다.");
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            setTodos((prevTodos) => 
               prevTodos.map((todo) =>
                  todo.id === id ? {...todo, description: editedText} : todo
               )
            );
         })
         .catch((err) => console.log(err));
      }
   }
   
   return (
      <TodoContext.Provider value={{ todos, addNewTask, deleteTodo, setTodos, handleEditSave }}>
         {children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoContextProvider };