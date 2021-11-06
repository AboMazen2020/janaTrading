//Js

let span = document.querySelector(".up");

window.onscroll = function () {


    this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
}

span.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};



// let numb = document.querySelectorAll(".num");
// let section = document.querySelector(".count-up");
// let started = false;

// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop){
//         if (!started) {
//             numb.forEach((num) => statCount(num));    
//         }
//         started = true;
//     }
// }
// function statCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;

//         if (el.textContent == goal) {
//             clearInterval(count);
//         }
//     }, 10);
// }
// statCount(document.querySelectorAll(".num")[0]);