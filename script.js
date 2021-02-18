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
//Расскрытие блока
let disclosure = function (task) {
    dcmt.getElementById(task).style.visibility = "visible";
}

//Задание 0 ---- работает
dcmt.getElementById("formTask_0").addEventListener("submit", function (event) {
    event.preventDefault();
    dcmt.getElementsByName("User").forEach(function (input) {
        localStorage.setItem("Uname", input.value);
    });
    printName();
});
//Задание 2 ---- работает
dcmt.getElementById("formTask_2").addEventListener("submit", function (event) {
    event.preventDefault();
    let str1 = "";
    let str2 = "";
    dcmt.getElementsByName("String_1").forEach(function (input) {
        str1 += input.value;
    });
    dcmt.getElementsByName("String_2").forEach(function (input) {
        str2 += input.value;
    });
    if (str1.length == str2.length) {
        dcmt.getElementById("TrOrFl").textContent = "true";
    } else {
        dcmt.getElementById("TrOrFl").textContent = "false";
    }
});

//Задание 3 ---- доработать
dcmt.getElementById("formTask_3").addEventListener("submit", function (event) {
    event.preventDefault();
    let arr = [];
    let max = 0, min = 0;
    for (let i = 0; i < 5; i++) {
        dcmt.getElementsByName("Num_" + i).forEach(function (input) {
            arr[i] = input.value;
        });
    }
    console.log(arr);
    min = arr[0];
    for (let i = 0; i < 5; i++) {
        if (arr[i] > min) {
            max = arr[i];
            continue;
        }
        if (arr[i] < min) {
            min = arr[i];
            continue;
        }
    }
    dcmt.getElementById("Min").textContent = "Min: " + min;
    dcmt.getElementById("Max").textContent = "Max: " + max;
});
//Задание 4 ---- таймер

dcmt.getElementById("formTask_4").addEventListener("submit", function (event) {
    event.preventDefault();
    if (dcmt.getElementsByName("TimeButton")[0].value == "Старт") {
        if(timer.timeValue(
            dcmt.getElementsByName("HH")[0].value,
            dcmt.getElementsByName("MM")[0].value,
            dcmt.getElementsByName("SS")[0].value
        )){
            timer.Button = true;
            timer.workTime();
            dcmt.getElementsByName("TimeButton")[0].value = "Пауза";
            dcmt.getElementById("timerMessage").textContent="Таймер запущен.";
        }else{
            dcmt.getElementById("timerMessage").textContent="Введены неверные значения";
        }
    } else {
        if (dcmt.getElementsByName("TimeButton")[0].value == "Пауза") {
            timer.Button = false;
            dcmt.getElementsByName("TimeButton")[0].value = "Старт"
            dcmt.getElementById("timerMessage").textContent="Таймер остановлен.";
        }
    }

});
class Timer {
    constructor(hh, mm, ss) {
        this.timeValue(hh, mm, ss)
        this.Button = true;
    }
    timeValue(hh, mm, ss) {
        if (hh < 0 || mm<0 ||mm>59||ss<0||ss>59)return false;
        this.hh = Number(hh);
        this.mm = Number(mm);
        this.ss = Number(ss);
        return true;
    }
    workTime() {
        const timeID = setInterval(
            () => {
                if ((this.hh <= 0 && this.mm <= 0 && this.ss <= 0) ||
                    this.Button == false
                ) {
                    clearTimeout(timeID);
                    //console.log("end");
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
            }, 1000
        );
    }
    showTime() {
        //console.log(this.hh+":"+this.mm+":"+this.ss);
        dcmt.getElementsByName("HH")[0].value = (this.hh < 10) ? "0" + this.hh : this.hh;
        dcmt.getElementsByName("MM")[0].value = (this.mm < 10) ? "0" + this.mm : this.mm;
        dcmt.getElementsByName("SS")[0].value = (this.ss < 10) ? "0" + this.ss : this.ss;
    }

}



//функции и переменные при запуске сраницы
printName();
let timer = new Timer(0, 0, 0);
