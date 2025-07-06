import Student from "./Student";
import IMG1 from "./assets/IMG1.png";
import TashInput from "./TaskInput";
import TaskList from "./TaskList";
import { useState } from "react";

function App() {
  const studentBox = [
    {
      id: 1,
      name: "Franklin Elele",
      status: "Present",
      ID: "STD-MF1023",
      img: IMG1,
      info: "Frank is a disciplined React learner who doesn't sleep until 2am.",
    },
    {
      id: 2,
      name: "John Doe",
      status: "Absent",
      ID: "STD-MF1024",
      img: IMG1,
      info: "John prefers backend but secretly enjoys styling with Tailwind.",
    },
    {
      id: 3,
      name: "Susan",
      status: "Present",
      ID: "STD-MF1044",
      img: IMG1,
      info: "Susan is the group leader — she finishes all assignments a day early.",
    },
    {
      id: 4,
      name: "Emeka",
      status: "Present",
      ID: "STD-MF1067",
      img: IMG1,
      info: "Emeka just discovered `useEffect` and is now unstoppable.",
    },
    {
      id: 5,
      name: "Amaka",
      status: "Absent",
      ID: "STD-MF1089",
      img: IMG1,
      info: "Amaka is a CSS wizard who can make anything look good.",
    },
    {
      id: 6,
      name: "Chinedu",
      status: "Present",
      ID: "STD-MF1100",
      img: IMG1,
      info: "Chinedu loves debugging and can find bugs in his sleep.",
    },
    {
      id: 7,
      name: "Adaobi",
      status: "Present",
      ID: "STD-MF1122",
      img: IMG1,
      info: "Adaobi is the queen of `props` and `state` management.",
    },
    {
      // id: 8,
      name: "Tunde",
      status: "Absent",
      ID: "STD-MF1144",
      img: IMG1,
      info: "Tunde is still trying to understand why `useState` is not a class.",
    },
  ];

  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  const addtask = () => {
    if (newtask.trim() === "") return;
    setTasks([...tasks, newtask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>📘 Medford Task Tracker</h1>
        <TashInput
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          onAdd={addtask}
        />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
      <h1 style={{ textAlign: "center" }}>Student Dashboard</h1>
      <div className="container">
        {studentBox.map((students) => (
          <Student
            key={students.ID}
            img={students.img}
            name={students.name}
            status={students.status}
            ID={students.ID}
            info={students.info}
          />
        ))}
      </div>
    </>
  );
}

export default App;
