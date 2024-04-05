// Recursive function
// let i = 1;

// let stop;
// function recursive() {
//     // console.log(i++)

//     if (i < 11) {
//         recursive()
//     }

//     stop = setInterval() => {
//         recursive()

//         if (i == 11) {
//             clearInterval(stop)

    
//         }
//     }, 1000);
// }

// recursive ()

// function countDown(fromNumber) {
//     console.log(fromNumber);
//     let nextNumber = fromNumber -1;

//     if (nextNumber > 0) {
        
//     }
// }

// Oclock --------------------------------------------------------------

const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const h = document.querySelector(".h")
const m = document.querySelector(".m")
const s = document.querySelector(".s")

function clock() {
    let time  = new Date();
    let hour = time.getHours()
    let minuts = time.getMinutes()
    let sec = time.getSeconds()


    hours.innerHTML = hour
    minutes.innerHTML = minuts

    if (hour < 10) {
        hours.innerHTML = "0" + hour
    }
    if (minuts < 10) {
        minutes.innerHTML = "0" + minuts
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minuts * 6}deg)`
    h.style.transform = `rotate(${hour * 0}deg)`


    setTimeout(() => {
        clock()
    }, 1000)
}

clock()

// tabs

const tabsItem = [...document.querySelectorAll('.tabsItem')] 
const tabsContentItem = [...document.querySelectorAll('.tabsContentItem')] 
 
for (let i = 0; i < tabsItem.length; i++) { 
    tabsItem[i].addEventListener('click', function() { 
        for (let k = 0; k < tabsContentItem.length; k++) { 
             
            tabsItem[k].classList.remove('active') 
            tabsContentItem[k].classList.remove('active') 
        } 
        tabsItem[i].classList.add('active') 
        tabsContentItem[i].classList.add('active') 
    })     
}
// ------------------------------------------------------------------------------------ 
// SEKUNDAMER
// ------------------------------------------------------------------------------------     

let stopwatchbtn = document.querySelector(".stopwatch__btn");
let stopwatchhour = document.querySelector(".stopwatch__hours");
let stopwatchminute = document.querySelector(".stopwatch__minutes");
let stopwatchsecond = document.querySelector(".stopwatch__seconds");
let info = document.querySelector(".tabsLink__span");

stopwatchbtn.addEventListener("click",function(){
    if (this.innerHTML == "start") {
        this.innerHTML = "stop";
        info.classList.add("active");
        let i = 0;
        setTimeout(()=> stopWatch(this,i),10);
    }else if (this.innerHTML == "stop"){
        this.innerHTML = "clear";
        info.classList.remove("active");
        info.classList.add("active_clear")
        let i = 0;
    }else{
        this.innerHTML = 'start';
        info.classList.remove("active_clear")
        stopwatchsecond.innerHTML = 0;
        stopwatchminute.innerHTML = 0;
        stopwatchhour.innerHTML = 0;
    }
})

function stopWatch(el,i){
    if(el.innerHTML == 'stop'){
        if(i == 60){
            i = 0;
            stopwatchsecond.innerHTML = i;
            if(stopwatchminute.innerHTML == 59){
                stopwatchminute.innerHTML = 0;
                stopwatchhour.innerHTML++;
            }else{
                stopwatchminute.innerHTML++;
            }
        }else{
            i++;
            stopwatchsecond.innerHTML = i;
        }
        setTimeout(()=>stopWatch(el,i),10)
    }
}