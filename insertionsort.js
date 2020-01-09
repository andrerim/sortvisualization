var insCanv = document.getElementById("insCanv");
var iCtx = insCanv.getContext("2d");
var speed = 100;

function insertionSort(elements) {
    let i = 1;
    function iterate(i){
      let j = i;

      function innerIterate(j){
          
          let tempval = elements[j];
          elements[j] = elements[j-1];
          elements[j-1] = tempval;
          clearCanv(iCtx);
          drawCanv(iCtx, elements)
          console.log(elements)
          
          
          j--;
          if (j > 0 && elements[j-1] > elements[j]){
              setTimeout(()=>innerIterate(j), speed);
            }
        }
        if (j > 0 && elements[j-1] > elements[j]){
            setTimeout(()=>innerIterate(j), speed);
            
        }
        i++;
        if (i < elements.length){
            setTimeout(()=>iterate(i), speed);
        }  
        
    }
    
    setTimeout(()=>iterate(i), speed);

/* let i = 1;
    while (i < elements.length){

        let j = i;

        while (j > 0 && elements[j-1] > elements[j]){
            let tempval = elements[j];
            elements[j] = elements[j-1];
            elements[j-1] = tempval;
            j--;
        }

        i++;
    } */
    return elements
}


