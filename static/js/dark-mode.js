const darkbtn = document.querySelector(".btn-toggle");

darkbtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    console.log("Dark Mode Enabled")
});