import { useState } from "react";

function Student({ img, name, status, lastName, ID, info, onDeleteStudent}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="student-cont">
        <h3>Medford High ID</h3>
        <img src={img} alt={name} width="170px" height="170px" />
        <h2>{name} {lastName}</h2>
        {showDetails && (
          <p>
            Welcome to Medford High<b> Mr {name} {lastName}</b>
          </p>
        )}
        {showDetails && (
          <p>
            Student status: <b>{status}</b>
          </p>
        )}
        <p>Student ID:{ID}</p>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Show Less" : "Show Details"}
        </button>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Less‹‹" : "See More››"}
        </button>
        {showMore && <p>{info}</p>}
        <button onClick={onDeleteStudent}>Delete Student</button>
      </div>
    </>
  );
}

export default Student;
