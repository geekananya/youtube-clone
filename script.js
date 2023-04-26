const scroll= document.querySelector(".next");
const menu = document.querySelector(".group");
// console.log(scroll, menu);

scroll.addEventListener("click", ()=>{
    menu.scrollLeft += 25;
})