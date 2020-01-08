var ctx = canvas.getContext("2d");

function bubbleSort(elements, elLength) {
  let swapped = false;

  function iterate(i) {
    if (elements[i] > elements[i + 1]) {
      let tempEl = elements[i];
      elements[i] = elements[i + 1];
      elements[i + 1] = tempEl;
      clearCanv(ctx);
      drawCanv(ctx, elements);
      swapped = true;
    }

    if (elLength > i) {
      setTimeout(() => iterate(i + 1), sortSpeed);
    } else if (swapped) {
      setTimeout(() => bubbleSort(elements, elLength - 1), sortSpeed);
    } else {
      return;
    }
  }
  iterate(0);
}

