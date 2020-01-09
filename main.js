var canvas = document.getElementById("bubbleCanv");

const canvW = canvas.width;
const canvH = canvas.height;
const lineW = 5;
const amountOfElements = Math.ceil(canvW / lineW);
const sortSpeed = 100;

function clearCanv(ctx) {
  ctx.clearRect(0, 0, canvW, canvH);
}

function drawEl(ctx, element, index) {
  /* ctx.fillStyle = "red" */
  ctx.fillRect(index * lineW, canvH - element, lineW, canvH);
}

function drawCanv(ctx, elements) {
  elements.forEach((el, index) => {
    drawEl(ctx, el, index);
  });
}

var elements = [];

let randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < amountOfElements; i++) {
  elements.push(randInt(0, canvH));
}

function startBubbleSort() {
  bubbleSort(elements, elements.length);
}

/* function startQuickSort() {
} */

//quickSort(elements, 0, elements.length-1);

insertionSort(elements);