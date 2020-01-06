var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

const canvW = canvas.width;
const canvH = canvas.height;
const lineW = 5;   
const amountOfElements = Math.ceil(canvW/lineW);


var elements = [];

let randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 0; i < amountOfElements; i++){
    elements.push(randInt(0, canvH));
};

function clearCanv(){
    ctx.clearRect(0, 0, canvW, canvH);
}

function drawEl(element, index){
    ctx.fillRect(index*lineW, canvH - element, lineW, canvH);
};

function drawCanv(){
    elements.forEach((el, index) => {
        drawEl(el, index);
    });
}

drawCanv();

async function bubbleSort(){
    let sorted = false;
    while (!sorted){
        for (let i = 0; i < elements.length - 1; i++){
            if (elements[i] > elements[i+1]){
                console.log(elements);
                let tempEl = elements[i];
                elements[i] = elements[i+1];
                elements[i+1] = tempEl;
                clearCanv();
                drawCanv();
                sorted = false;
                console.log(elements)
                break;
            } 
            sorted = true; 
        }
        await new Promise(r => setTimeout(r, 10));
    }
};

bubbleSort();


