
const btn=document.getElementById("toggleTheme");
btn.onclick=()=>{document.body.classList.toggle("dark")};
function goTo(e){
    document.querySelector(`#${e}`).scrollIntoView({behavior:"smooth"})
}

document.getElementById("contactForm").addEventListener("submit",e=>{
    e.preventDefault(),document.getElementById("formMessage").innerText="Message sent!"
});