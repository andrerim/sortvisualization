var quickCanv = document.getElementById("quickCanv");
var qCtx = quickCanv.getContext("2d");


function partition(elements, min, max) {
    let q = 0;
  let i = min - 1;
  let pivot = elements[max];
  function iterateb(j) {
      q = 1
    if (elements[j] < pivot) {
      i++;
      let temp = elements[i];
      elements[i] = elements[j];
      elements[j] = temp;
      clearCanv(qCtx);
      drawCanv(qCtx, elements);
    }
    if (j < max) {
      setTimeout(() => iterateb(j + 1), sortSpeed);
    } 
  }
  if (q == 0){
      iterateb(min);
  }
  let temp = elements[max];
  elements[max] = elements[i + 1];
  elements[i + 1] = temp;
  clearCanv(qCtx);
  drawCanv(qCtx, elements);
  console.log(elements);
  return i + 1;
}

function quickSort(elements, min, max) {
  if (min < max) {
    let pi = partition(elements, min, max);
    quickSort(elements, min, pi - 1);
    quickSort(elements, pi + 1, max);
    console.log(elements);
  }
}
