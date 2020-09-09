

//what type of messages are able to be sent 

function allowmessage() {
    inputs = document.querySelectorAll(".info input")




    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("minlength", "3")
        inputs[i].setAttribute("maxlenght", "10")
        inputs[i].setAttribute("required", "yes")
    }
}


allowmessage()
//function to send data through the form
async function sendmessage() {
    let email = document.querySelector("#email").value
    let name = document.querySelector("#name").value
    let message = document.querySelector("#message").value

    if (email, name, message) {
        let visitor = { email, name, message }
        visitor = JSON.stringify(visitor)

        console.log(visitor)

        let response = await fetch("/messages", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: visitor
        })
    }

}





//animate message
function animatemessage() {
    let letter = document.querySelectorAll("form div span")


    for (let i = 0; i < letter.length; i++) {
        letter[i].style.animation = `msgappear 0.72s forwards ${i / 7}s`
        letter[i].style.animationIterationCount = 1

    }
}

animatemessage()




//Email - Telephone
function showcontact() {
    let item = document.querySelectorAll(".footer i")


    let email = item[2]
    let tel = item[3]
    let showedemail = document.querySelector(".email")
    let showphone = document.querySelector(".telephone")

    email.addEventListener("click", function () {
        showedemail.classList.toggle("activated")
        showphone.classList.remove("activated")

    })

    tel.addEventListener("click", function () {
        showphone.classList.toggle("activated")
        showedemail.classList.remove("activated")

    })


}
showcontact()


let counter = 2
let header = document.querySelector(".header")
let menubutton = document.querySelector(".menubutton")
let menu = document.getElementsByClassName("menu")[0]
// Menu Animations for Mobile
function tomobile() {
    let menuline = document.querySelectorAll(".menu a")


    menubutton.addEventListener("click", function () {
        if (counter % 2 == 0) {
            menu.classList.add("mobile")
            menubutton.classList.add("mobile")
            for (let h = 0; h < menuline.length; h++) {
                menuline[h].classList.add("mobile")
            }

        }
        else {
            menu.classList.remove("mobile")
            menubutton.classList.remove("mobile")
            for (let h = 0; h < menuline.length; h++) {
                menuline[h].classList.remove("mobile")
            }
        }
        counter++

    })
}
tomobile()



//animate the logo Vlad colceriu
let logo = function () {
    let logoline = document.querySelectorAll(".logoline")
    for (let i = 0; i < logoline.length; i++) {

        let a = 1 + i / 2
        logoline[i].style.animation = `acolor ${a}s infinite`
    }
}

logo()

