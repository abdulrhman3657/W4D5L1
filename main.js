

let btn1 = document.getElementById("btn1");

let str1 = "hello"

btn1.addEventListener("click", () => {
    btn1.innerText = str1
})


let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    btn2.style.fontSize = "larger"
})


let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    btn3.style.fontSize = "10px"
})


let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
    btn4.style.color = "red"
})

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
    document.body.style.backgroundColor = "red"
})

let btn6 = document.getElementById("btn6");

btn6.addEventListener("click", () => {

    let img = document.getElementById("img1");
    img.src = "https://images.pexels.com/photos/18343649/pexels-photo-18343649/free-photo-of-potted-monsteras-on-tables-in-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";


})


