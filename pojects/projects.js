/*Hamburger toggle*/
const toggleHamburger=document.getElementById("toggle-hamburger");
const navigation=document.getElementsByClassName("navigation")[0];

toggleHamburger.addEventListener("click" , ()=>{
    navigation.classList.toggle("active")
})
/*Hamburger toggle*/