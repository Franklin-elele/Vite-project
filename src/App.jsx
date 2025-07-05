import React from "react"
import Student from "./Student"
import IMG1 from "./assets/IMG1.png" 

function App() {

  return (
    <>

    <h2 style={{ textAlign: "center" }}>Student Dashboard</h2>
<div className="container">
    <Student
    img={IMG1}
    name='Franklin Elele'
    status='Present'
    ID={'STD-MF1023'}
    info="Frank is a disciplined React learner who doesn't sleep until 2am."/>

    <Student
    img={IMG1}
    name='John Doe'
    status='Absent'
    ID={'STD-MF1024'}
    info="John prefers backend but secretly enjoys styling with Tailwind."/>

     <Student
    img={IMG1}
    name='Susan'
    status='Present'
    ID={'STD-MF1044'}
    info="Susan is the group leader — she finishes all assignments a day early."/>  

     <Student
    img={IMG1}
    name='Amaka'
    status='Present'
    ID={'STD-MF1089'}
    info="Amaka just discovered `useEffect` and is now unstoppable."/>  

     <Student
    img={IMG1}
    name='Daniel'
    status='Present'
    ID={'STD-MF1132'}
    info="Daniel built a to-do app and hasn’t stopped talking about it"/>  

     <Student
    img={IMG1}
    name='Chioma'
    status='Absent'
    ID={'STD-MF1176'}
    info="Chioma's CSS skills are fire — her components always glow."/>  

     <Student
    img={IMG1}
    name='Jide'
    status='Present'
    ID={'STD-MF1210'}
    info="Jide crashed his app 4 times today but still pushed to GitHub."/>  

     <Student
    img={IMG1}
    name='Adaobi'
    status='Absent'
    ID={'STD-MF1254'}
    info="Adaobi debugged a prop error and now walks with confidence."/> 
    </div>
    </>
  )
}

export default App
