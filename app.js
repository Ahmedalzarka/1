let btn = document.getElementById("btn");
let preview1 = document.querySelector(".preview1");
let bookName = document.querySelector(".bookName");


bookName.addEventListener("click", () =>{
    preview1.style.display = "grid";
})

btn.addEventListener("click",() => {
    preview1.style.display = "none";
})
