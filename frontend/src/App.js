import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Addtodo from "./components/Addtodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const ondelelte = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    let sr_no;
    if (todos.length === 0) {
      sr_no = 1;
    } else {
      sr_no = todos[todos.length - 1].sr_no + 1;
    }
    const mytodo = {
      sr_no: sr_no,
      title: title,
      desc: desc,
    };
    settodos([...todos, mytodo]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/Todos_List"
            element={
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todos={todos} ondelete={ondelelte} />
              </>
            }
          ></Route>
          <Route
            exact path="/about"
            element={<Todos todos={todos} ondelete={ondelelte} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
