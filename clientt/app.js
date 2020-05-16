fetch('http://localhost:5000/Teachers')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#teacher").innerHTML += data.map(teacher => `<tr>
        <td>${teacher.id}</td>
         <td>${teacher.name}</td> 
         <td>${teacher.classroom}</td>
         <td>${teacher.year}</td>
         </tr>
        `).join("")
    });

fetch('http://localhost:5000/Students')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#student").innerHTML += data.map(student => `<tr>
             <td>${student.id}</td> 
             <td>${student.name}</td> 
             <td>${student.classroom}</td>
             <td>${student.year}</td>
             </tr>
        `).join("")
    });