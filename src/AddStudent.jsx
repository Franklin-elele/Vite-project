import { useState } from "react";
import IMG1 from "./assets/IMG1.png";

function AddStudent({ onAddStudent}) {
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentStatus, setStudentStatus] = useState("");
  const [studentInfo, setStudentInfo] = useState("");

  const handleAddStudent = () => {
    if (studentName.trim() === "") return;

    const newStudent = {
      name: studentName,
      lastName: studentLastName,
      status: studentStatus,
      info: studentInfo,
      ID: `STD-MF${Math.floor(1000 + Math.random() * 9000)}`,
      img: IMG1, // Placeholder for student image
    };
    onAddStudent(newStudent);
    // setAddedStudents(newStudent);
    setStudentName("");
    setStudentLastName("");
    setStudentStatus("");
    setStudentInfo("");
    alert(
      `Welcome to Medford High, ${studentName.toUpperCase()} ${studentLastName.toUpperCase()}! Your ID is ${newStudent.ID}`
    );
  };

  return (
    <>
      <div className="add-student">
        <h3>Add Student</h3>
        <input
          type="text"
          placeholder="Enter student Firstname"
          className="addstud"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter student Lastname"
          className="addstud"
          value={studentLastName}
          onChange={(e) => setStudentLastName(e.target.value)}
        />
        <select
          className="addstud"
          value={studentStatus}
          onChange={(e) => setStudentStatus(e.target.value)}
        >
          <option value="" disabled>
            Select status
          </option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <textarea
          placeholder="Extra info (optional)"
          className="add-stud"
          value={studentInfo}
          onChange={(e) => setStudentInfo(e.target.value)}
        />
        <button className="add-btn-stud" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
    </>
  );
}

export default AddStudent;
