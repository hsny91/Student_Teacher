fetch('http://localhost:5000/Teachers')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#teacher").innerHTML += data.map(m => `<li class=" text-muted">Id:<b>${m.id}</b> Name:<b>${m.name}</b> Class:<b>${m.classroom}</b></li>
        `).join("")
    });

    fetch('http://localhost:5000/Students')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#student").innerHTML += data.map(m => `<li class=" text-muted">Id:<b>${m.id}</b> Name:<b>${m.name}</b> Class:<b>${m.classroom}</b></li>
        `).join("")
    });