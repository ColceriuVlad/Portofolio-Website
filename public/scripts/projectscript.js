
//sliding and animation 
function slide() {

    let buttoncontainer = document.getElementsByClassName("buttons")[0]
    let buttons = buttoncontainer.getElementsByTagName("input")
    let item = document.querySelector(".slider")
    let speed = 75
    let position = 0
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            for (let k = 0; k < buttons.length; k++) {
                buttons[k].classList.remove("selected")
            }


            this.classList.add("selected")

            //moving
            position = -i * speed
            item.style.marginTop = position + "vh"

        })
    }
}


slide()

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

