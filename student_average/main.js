const form = document.querySelector('#averageForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const testInput1 = document.getElementById('itest1');
  const testInput2 = document.getElementById('itest2');
  const testInput3 = document.getElementById('itest3');

  let test1 = parseFloat(testInput1.value.replace(',', '.'));
  let test2 = parseFloat(testInput2.value.replace(',', '.'));
  let test3 = parseFloat(testInput3.value.replace(',', '.'));

  if (isNaN(test1) || isNaN(test2) || isNaN(test3)) {
    setResultado('Please, type valid numeric values for the tests.', false);
    return;
  }

  /*
THIS PART ABOUT APPEARING AT THE MAXIMUM VALUE 10 I WASN'T THE ONE WHO DID, BECAUSE I STILL DON'T HAVE THE KNOWLEDGE TO DO IT, BUT I SEARCHED HOW TO DO IT TO MAKE THE PROGRAM MORE COMPLETE
  */
  test1 = Math.min(10, Math.max(0, test1));
  test2 = Math.min(10, Math.max(0, test2));
  test3 = Math.min(10, Math.max(0, test3));

  const studentAverage = averageTest(test1, test2, test3);

  studentAverage < 7 ? avgResult(`Failed, average: ${studentAverage}`, false) : avgResult(`Approved, average: ${studentAverage}`, true);
});

function averageTest(test1, test2, test3) {
  const average = (test1 + test2 + test3) / 3;
  return average.toFixed(1);
}

function createP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.getElementById('avgResult');
  resultado.innerHTML = '';

  const p = createP();
  isValid ? p.classList.add('p-greater') : p.classList.add('p-smaller');
  p.innerHTML = msg;
  resultado.appendChild(p);
}

function avgResult(msg, isGreater) {
  const pResult = document.getElementById('avgResult');
  pResult.innerHTML = '';

  const p = createP();
  isGreater ? p.classList.add('p-greater') : p.classList.add('p-smaller');
  p.innerHTML = msg;
  pResult.appendChild(p);
}

// I ALSO DIDN'T CREATE THIS FUNCTION
['itest1', 'itest2', 'itest3'].forEach(function (id) {
  const input = document.getElementById(id);
  input.addEventListener('input', function () {
    if (parseFloat(input.value.replace(',', '.')) > 10) {
      input.value = '10';
    }
  });
});
