const box = document.querySelector(".box");
const btnOn = document.querySelector(".btn-on")
const btnOff = document.querySelector(".btn-off");

for(let i= 0;i < 1020; i++){
    const boxItem = document.createElement("div");

    boxItem.classList.add("box-item")
    boxItem.addEventListener("mouseover", () =>{
        setColor(boxItem)
    });
    boxItem.addEventListener("mouseleave",()=>{
        setTimeout(()=>{
            removeColor(boxItem)
        },500);
    });
    btnOn.addEventListener("click", ()=>{
        setColor(boxItem)
    })
    btnOff.addEventListener("click", ()=>{
        removeColor(boxItem)
    })

    box.append(boxItem)
}
function getRandomColor(){
    const colors = [
        "green",
        "red",
        "yellow",
        "blue",
        "purple",
        "orange",
        "gray",
        "lime",
        "brown",
        "aqua",
        "chocolate",
    ];
    const randomIndex = Math.floor(Math.random()* colors.length);
    return colors [randomIndex]
}

function setColor(element){
    const randomColor =  getRandomColor()
    element.style.background = randomColor
    element.style.boxShadow = ` 0 0 10px ${randomColor}`
}


function removeColor(element){
    element.style.background = "#464646"
    element.style.boxShadow = "none"
}