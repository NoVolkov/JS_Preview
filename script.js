let dcmt = document;

//Приветствие в блоке
let printName = function () {
    let Name = "";
    if (localStorage.getItem("Uname") == null) {
        Name += "гость";
    } else {
        Name += localStorage.getItem("Uname");
    }
    dcmt.getElementByName("User").forEach(function (input) {
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
//Задание 2
dcmt.getElementById("formTask_2").addEventListener("submit", function(event){
    event.preventDefault();
    let str1="";
    let str2="";
    dcmt.getElementByName("String_1").forEach(function (input) {
        str1+=input.value;
    });
    dcmt.getElementByName("String_2").forEach(function (input) {
        str2+=input.value;
    });
    if(str1.lenght==str2.length){
        dcmt.getElementById("TrOrFl").textContent="true";
    }else{
        dcmt.getElementById("TrOrFl").textContent="false";
    }
});

//Задание 3
dcmt.getElementById("formTask_3").addEventListener("submit", function(event){
    event.preventDefault();
    let max=0, min=0;
    for(let i=0;i<5;i++){
        dcmt.getElementByName("Num_"+i).forEach(function (input) {
            if(input.value>0)max=input.value;
            if(input.value<=max)max=input.value;
        });
    }
    dcmt.getElementById("Min").textContent="Min: "+min;
    dcmt.getElementById("Max").textContent="Max: "+max;
});




//функции при запуске сраницы
printName();
