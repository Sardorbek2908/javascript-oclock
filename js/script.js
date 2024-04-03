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