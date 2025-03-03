

function Practice() {
    const students=[];
  return (
    <>
     {/* <p>{students.length&& "No students Found"}</p> */}
     {/* 1st */}
     {/* <p>{students.length===0 && "No student found"}</p> */}

     {/* 2nd--Best Approach? */}
     {/* <p>{!students.length && "No students Found"}</p> */}

     {/* 3rd */}
     <p>{Boolean(!students.length) && "No students Found"}</p>
     <p>Number of students: {students.length}</p>
    </>
  )
}

export default Practice