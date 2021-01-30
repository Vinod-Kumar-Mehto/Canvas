function start(){



const changes = document.querySelectorAll(".Change input");
document.querySelectorAll("select").forEach(current => current.addEventListener("change", function(){
    txt.globalCompositeOperation = `${this.value}`;
}));


changes.forEach( input => input.addEventListener("change", myFunction));
changes.forEach( input => input.addEventListener("mousemove", myFunction));


const canvas = document.querySelector("canvas");
const txt = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function myFunction(){
    if(this.name == "base"){
        txt.strokeStyle = `${this.value}`;
        
    }else
       txt.lineWidth = `${this.value}`;
}

txt.lineJoin = "round";
txt.lineCap = "round";



let isDrawing = false;
let lastX = 0;
let LastY = 0;
let hue = 0;
let check = false;
const checkbox = document.querySelector("#myCheck");
checkbox.addEventListener("click", function(){
    if(this.checked){
        check = true;
     }else {
         check =false;
     }
})
    
console.log(check);
       
function draw (e){
    if(!isDrawing) return;
    if(check){

        txt.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        console.log(hue);
    }
    txt.beginPath();
    txt.moveTo(lastX, LastY)
    txt.lineTo(e.offsetX, e.offsetY)
    txt.stroke();
    [lastX, LastY] = [e.offsetX, e.offsetY]
    hue++
    if(hue >= 360){
        hue =0;
    }


     
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, LastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

};
