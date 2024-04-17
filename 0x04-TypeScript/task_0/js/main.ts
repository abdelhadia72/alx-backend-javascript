interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const StudentOne: Student = {
    firstName: "Sarah",
    lastName: "Johnson",
    age: 28,
    location: "Emerald City, Ozland"
}

const StudentTwo: Student = {
    firstName: "Michael",
    lastName: "Chang",
    age: 35,
    location: "Starlight Valley, Luna Prime"
}

const studentsList = [StudentOne, StudentTwo]

const tbody = document.createElement("tbody");

const table = document.createElement("table");
table.appendChild(tbody);

studentsList.forEach((element)=>{
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${element.firstName}</td>
        <td>${element.location}</td>
    `;
    tbody.appendChild(row);
});

document.body.appendChild(table);


console.log("here")