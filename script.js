let dcmt = document;

//Приветствие в блоке
let printName = function () {
    let Name = "";
    if (localStorage.getItem("Uname") == null) {
        Name += "гость";
    } else {
        Name += localStorage.getItem("Uname");
    }
    dcmt.getElementsByName("User").forEach(function (input) {
        dcmt.getElementById("usrName").textContent = "Привет, " + Name;
    });
}

let disclosure=function(task){
    dcmt.getElementById(task).style.visibility="visible";
}

//Задание 0
dcmt.getElementById("formTask_0").addEventListener("submit", function (event) {
    event.preventDefault();
    dcmt.getElementsByName("User").forEach(function (input) {
        localStorage.setItem("Uname", input.value);
    });
    printName();
});



//функции при запуске сраницы
printName();