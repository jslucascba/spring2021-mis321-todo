
function showModal(id, task){
    console.log(id + " " + task);
    var modal = document.getElementById("editModal");
    document.getElementById("updateTask").value = task;
    document.getElementById("updateSubmit").setAttribute('onclick', 'putTask('+id+')');
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
}

function closeModal(){
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

window.onclick = function(event){
    var modal = document.getElementById("editModal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function putTask(id){
    const taskApiUrl = "http://localhost:8080/api/task/" + id;
    let inputTask = document.getElementById("updateTask").value;
    let stringId = id.toString();
    let newTask = {
        id: stringId,
        task: inputTask
    };

    fetch(taskApiUrl, {
        method: "PUT",
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