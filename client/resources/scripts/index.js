var maxId = 3;
var tasks = [];

function handleOnLoad(){
    getTasks();
}

function populateTable(){
    let html = "<table class=\"halfpage\">";
    html += "<tr><th>ID</th><th>Task</th><th>Edit</th><th>Complete Task</th></tr>";
    tasks.forEach(task => {
        html += "<tr><td>"+task.id+"</td>";
        html += "<td>"+task.task+"</td>";
        html += "<td><button onclick=\"showModal("+task.id+",\'"+task.task+"')\">Edit</button></td>";
        html += "<td><button onclick=\"handleComplete("+task.id+")\">Complete</button></td></tr>";
    });
    html += "</table>";
    document.getElementById("table").innerHTML = html;
}


function handleComplete(id){
    tasks = tasks.filter(task => {
        console.log(task.id + " " + id);

        return task.id != id
    });
    populateTable();
}

function handleAddTask(){
    const taskApiUrl = "http://localhost:8080/api/task";
    let inputTask = document.getElementById("task").value;
    let newTask = {
        task: inputTask
    };

    fetch(taskApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(newTask)
    }).then(function(response){
        console.log(response);
        getTasks();
    });

}

function getTasks(){
    const taskApiUrl = "http://localhost:8080/api/task";
    fetch(taskApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        tasks = json;
        populateTable();
    })
}