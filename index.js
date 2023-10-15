//1
let b1 = document.querySelector('.b1');

function calc1() {
    let x = document.querySelector('.i1_1');
    let y = document.querySelector('.i1_2');
    let answer = document.querySelector('.ans1'); 
    if (x.value > y.value) {
        answer.innerHTML = '1';
    }
    else if (x.value < y.value) {
        answer.innerHTML = '-1';
    }
    else {
        answer.innerHTML = '0';
    }
}

b1.onclick = () => {
    calc1();
}

//2
let b2 = document.querySelector('.b2');

function calc2() {
    let x = document.querySelector('.i2_1');
    let y = document.querySelector('.i2_2');
    let z = document.querySelector('.i2_3');
    let answer = document.querySelector('.ans2'); 
    let calc = x.value + y.value + z.value;
    answer.innerHTML = calc;
}

b2.onclick = () => {
    calc2();
}

//3
let b3 = document.querySelector('.b3');

function calc3() {
    let x = document.querySelector('.i3');
    let answer = document.querySelector('.ans3'); 
    let calc = 0;
    for (let i = 1; i < +x.value; i++) {
        if (+x.value % i == 0) {
            calc += i;
        }
    }
    if (calc == +x.value) {
        answer.innerHTML = 'Совершенное';
    }
    else {
        answer.innerHTML = 'Не совершенное';
    }    
}

b3.onclick = () => {
    calc3();
}

//4
let b4 = document.querySelector('.b4');

function calc4() {
    let x = document.querySelector('.i4_1');
    let y = document.querySelector('.i4_2');
    let z = document.querySelector('.i4_3');
    let xs = '', ys = '', zs = '';
    let time = '';
    let answer = document.querySelector('.ans4'); 

    if (+x.value >= 0 && +x.value <= 24 && +y.value >= 0 && +y.value <= 60 && +z.value >= 0 && +z.value <= 60) {
        if (+x.value < 10) {
            xs = '0' + +x.value;
        }        
        else {
            xs = +x.value; 
        }

        if (+x.value == 24) {
            xs = '00';
        }

        time += xs + ':';

        if (+y.value < 10) {
            ys = '0' + +y.value;
        }       
         else {
            ys = +y.value; 
        }

        if (+y.value == 60) {
            ys = '00';
        }

        time += ys + ':';

        if (+z.value < 10) {
            zs = '0' + +z.value;
        }
        else {
            zs = +z.value; 
        }

        if (+z.value == 60) {
            zs = '00';
        }

        time += zs;
    }
    answer.innerHTML = time;
}

b4.onclick = () => {
    calc4();
}

//5
let b5 = document.querySelector('.b5');

function calc5() {
    let sec = document.querySelector('.i5');
    let answer = document.querySelector('.ans5'); 
    let hrs = 0, mins = 0, sec2 = 0;
    if (+sec.value >= 0) {
        hrs = Math.floor(+sec.value / 3600);
        mins = Math.floor((+sec.value - (hrs * 3600)) / 60);
        sec2 = (+sec.value - (hrs * 3600) - (mins * 60));
    }
    if (mins < 10) {
        let t = mins;
        mins = String(mins);
        mins = '0' + t;
    }
    if (sec2 < 10) {
        let t = sec2;
        sec2 = String(sec2);
        sec2 = '0' + t;
    }
    answer.innerHTML = hrs + ':' + mins + ':' + sec2;
}

b5.onclick = () => {
    calc5();
}