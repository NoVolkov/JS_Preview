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
//Последний открытый блок
let block;
//Расскрытие блока
let disclosure = function (task) {
    dcmt.getElementById(task).style.visibility = "visible";
    dcmt.getElementById("shadow").style.visibility="visible";
    block=task;
}
//Закытие блока
let closeShadow=function(){
    dcmt.getElementById(block).style.visibility = "hidden";
    dcmt.getElementById("shadow").style.visibility="hidden";
}
//Задание 0 ---- работает
dcmt.getElementById("formTask_0").addEventListener("submit", function (event) {
    event.preventDefault();
        localStorage.setItem("Uname", dcmt.getElementsByName("User")[0].value);
    printName();
});
//Задание 1 ---- площадь треугольника
dcmt.getElementById("formTask_1").addEventListener("submit", function (event) {
    event.preventDefault();
    let a = dcmt.getElementsByName("Base")[0].value,
        h = dcmt.getElementsByName("Height")[0].value;
    dcmt.getElementById("areaTri").textContent = a + "*" + h + "/2=" + a * h / 2;
});
//Задание 2 ---- длины строк
dcmt.getElementById("formTask_2").addEventListener("submit", function (event) {
    event.preventDefault();
    let str1 = dcmt.getElementsByName("String_1")[0].value;
    let str2 = dcmt.getElementsByName("String_2")[0].value;
    if (str1.length == str2.length) {
        dcmt.getElementById("TrOrFl").textContent = "true";
    } else {
        dcmt.getElementById("TrOrFl").textContent = "false";
    }
});

//Задание 3 ---- max min
dcmt.getElementById("formTask_3").addEventListener("submit", function (event) {
    event.preventDefault();
    let arr = [];
    let copy = 0;
    for (let i = 0; i < 5; i++) {
        arr[i] = dcmt.getElementsByName("Num_" + i)[0].value;
    }
    dcmt.getElementById("Min").textContent = "Min: " + Math.min.apply(null, arr);
    dcmt.getElementById("Max").textContent = "Max: " + Math.max.apply(null, arr);
});
//Задание 4 ---- таймер
dcmt.getElementById("formTask_4").addEventListener("submit", function (event) {
    event.preventDefault();
    //запуск таймера
    if (dcmt.getElementsByName("TimeButton")[0].value == "Старт") {
        if (timer.timeValue(
            dcmt.getElementsByName("HH")[0].value,
            dcmt.getElementsByName("MM")[0].value,
            dcmt.getElementsByName("SS")[0].value
        )) {
            timer.Button = true;
            timer.workTime();
            dcmt.getElementsByName("TimeButton")[0].value = "Пауза";
            dcmt.getElementById("timerMessage").textContent = "Таймер запущен.";
            dcmt.getElementsByName("HH")[0].disabled = true;
            dcmt.getElementsByName("MM")[0].disabled = true;
            dcmt.getElementsByName("SS")[0].disabled = true;
        } else {
            dcmt.getElementById("timerMessage").textContent = "Введены неверные значения";
        }
        //остановка таймера
    } else {
        if (dcmt.getElementsByName("TimeButton")[0].value == "Пауза") {
            timer.Button = false;
            dcmt.getElementsByName("TimeButton")[0].value = "Старт"
            dcmt.getElementById("timerMessage").textContent = "Таймер остановлен.";
        }
    }
});
class Timer {
    constructor(hh, mm, ss) {
        this.timeValue(hh, mm, ss)
        this.Button = true;
    }
    timeValue(hh, mm, ss) {
        if (hh < 0 || mm < 0 || mm > 59 || ss < 0 || ss > 59) return false;
        this.hh = Number(hh);
        this.mm = Number(mm);
        this.ss = Number(ss);
        return true;
    }
    //цикл работы таймера
    workTime() {
        const timeID = setInterval(
            () => {
                //остановка при достижении 0 или паузы
                if ((this.hh <= 0 && this.mm <= 0 && this.ss <= 0) ||
                    this.Button == false) {
                    clearTimeout(timeID);
                    dcmt.getElementsByName("HH")[0].disabled = false;
                    dcmt.getElementsByName("MM")[0].disabled = false;
                    dcmt.getElementsByName("SS")[0].disabled = false;
                } else {
                    this.ss--;
                    if (this.ss < 0) {
                        this.mm--;
                        this.ss = 59;
                    }
                    if (this.mm < 0) {
                        this.hh--;
                        this.mm = 59;
                    }
                }
                this.showTime();
                //при достижении 0
                if (this.hh <= 0 && this.mm <= 0 && this.ss <= 0) {
                    dcmt.getElementsByName("TimeButton")[0].value = "Старт"
                    dcmt.getElementById("timerMessage").textContent = "Время прошло.";
                }
            }, 1000
        );
    }
    //отображение таймера
    showTime() {
        dcmt.getElementsByName("HH")[0].value = (this.hh < 10) ? "0" + this.hh : this.hh;
        dcmt.getElementsByName("MM")[0].value = (this.mm < 10) ? "0" + this.mm : this.mm;
        dcmt.getElementsByName("SS")[0].value = (this.ss < 10) ? "0" + this.ss : this.ss;
    }
}

//Задание 5 ---- тест

//Задание 6 ---- заставка

let disclosure_6=function(){
    disclosure('formTask_6');
    let rand=Math.floor(Math.random()*3);
    let d=new Date();
    let n=(localStorage.getItem("Uname")!=null)?localStorage.getItem("Uname"):"гость";
    dcmt.getElementById("image").src="img/img_"+rand+".jpg";
    dcmt.getElementById("date").textContent=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
    dcmt.getElementById("name").textContent="Пользователь: "+n;
}

//функции и переменные при запуске сраницы
printName();
let timer = new Timer(0, 0, 0);
