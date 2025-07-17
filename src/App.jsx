  import Student from "./Student";
  import IMG1 from "./assets/IMG1.png";
  import TashInput from "./TaskInput";
  import TaskList from "./TaskList";
  import AddStudent from "./AddStudent";
  import { useState } from "react";

  function App() {
    const [studentBox, setStudentBox] = useState([
      {
        name: "John",
        lastName: "Doe",
        status: "Present",
        info: "John is a diligent student who excels in mathematics.",
        ID: "STD-MF1234",
        img: IMG1, // Placeholder for student image
      },
      {
        name: "Jane",
        lastName: "Smith",
        status: "Absent",
        info: "Jane is an excellent student with a keen interest in science.",
        ID: "STD-MF5678",
        img: IMG1, // Placeholder for student image
      },
      {name: "Alice",
        lastName: "Johnson",
        status: "Present",
        info: "Alice is a creative student who loves art and literature.",
        ID: "STD-MF9101",
        img: IMG1, // Placeholder for student image
      },
      {name: "Bob",
        lastName: "Brown",
        status: "Absent",
        info: "Bob is a hardworking student who is passionate about history.",
        ID: "STD-MF1121",
        img: IMG1, // Placeholder for student image
      },
      {name: "Charlie",
        lastName: "Davis",
        status: "Present",
        info: "Charlie is a tech-savvy student who enjoys coding and robotics.",
        ID: "STD-MF3141",
        img: IMG1, // Placeholder for student image
      },
      {name: "Diana",
        lastName: "Evans",
        status: "Absent",
        info: "Diana is a talented student with a passion for music and drama.",
        ID: "STD-MF5161",
        img: IMG1, // Placeholder for student image
      },
      {name: "Ethan",
        lastName: "Garcia",
        status: "Present",
        info: "Ethan is a curious student who loves exploring new ideas and concepts.",
        ID: "STD-MF7181",
        img: IMG1, // Placeholder for student image
      },
      {name: "Fiona",
        lastName: "Harris",
        status: "Absent",
        info: "Fiona is a dedicated student who excels in sports and physical education.",
        ID: "STD-MF9202",
        img: IMG1, // Placeholder for student image
      },
    ]);
    const [tasks, setTasks] = useState(["Code for 2hrs atleast."]);
    const [newtask, setNewTask] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const addtask = () => {
      if (newtask.trim() === "") return;
      setTasks([...tasks, newtask]);
      setNewTask("");
    };

    const handleAddStudent = (newStudent) => {
      setStudentBox((prev) => [...prev, newStudent]);
    };

    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };

    const deleteStudent = (id) => {
      const updatedStudents = studentBox.filter((student) => student.ID !== id)
      setStudentBox(updatedStudents)
    }

    const filteredStudents = studentBox.filter((student) => 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.ID.includes(searchQuery)
    )

    return (
      <>
            <h1
          style={{ textAlign: "center" }}>
          Student Dashboard
        </h1>

        <AddStudent 
        onAddStudent={handleAddStudent} />

        <div className="student-search"  style={{ padding: "2rem", textAlign: "center" }}>
          <h3>Search For Students</h3>
          <input
            className="search-stud"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value )}
            placeholder="Search by name or ID"
          />
        </div>

        <div
        className="container">
          {filteredStudents.map((students) => (
            <Student
              key={students.ID}
              img={students.img}
              name={students.name}
              lastName={students.lastName}
              status={students.status}
              ID={students.ID}
              info={students.info}
              onDeleteStudent={() => deleteStudent(students.ID)}
            />
          ))}
        </div>

        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>📘 Medford Task Tracker</h1>
          <TashInput
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
            onAdd={addtask}
          />
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </>
    );
  }

  export default App;
