/*Hamburger toggle*/
const toggleHamburger=document.getElementById("toggle-hamburger");
const navigation=document.getElementsByClassName("navigation")[0];

toggleHamburger.addEventListener("click" , ()=>{
    navigation.classList.toggle("active")
})
/*Hamburger toggle*/

/*About*/
const readMore=document.getElementById("desc-button-wrap");
const descSpan=document.getElementsByClassName("desc-span")[0];
const skillsDev=document.getElementsByClassName("skills-left")[0];

readMore.addEventListener("click" , ()=>{
    descSpan.classList.toggle("active");

    if(readMore.innerText=="Read Less"){
        readMore.innerText="Read More";
        skillsDev.style.margin="-10rem 0 0 0";
    }else{
        readMore.innerText="Read Less";
        skillsDev.style.margin="10rem 0 0 0";
    }
    readMore.style.color="white";
    readMore.style.fontSize="0.9rem";
})
/*About*/

$function()


