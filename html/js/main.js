function mybtn(){
    city = document.getElementById("city").value;
    console.log(city);
    overlay = document.getElementById("overlay");
    overlay.style.display = "grid"; 
    overlay.classList.add("animate-overlay");
}