const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const heightInput = e.target.querySelector('#Height')
  const weightInput = e.target.querySelector('#Weight')
  const height = Number(heightInput.value)
  const weight = Number(weightInput.value)

  console.log(height, weight)
   
  if(isNaN(weight) || isNaN(height) || weight===0 || height===0 ) {
    setResultado('Type a valid number', false)
    return;
  }

  const BMI = getBMI(height, weight)
  const indexBMI = getIndexBMI(BMI)

  const msg = `Your BMI ${BMI}, ${indexBMI}`
  setResultado(msg, true)

})

function getIndexBMI(BMI){

  const index = ['Severe obesity range','Obesity range','Overweight range', 'healthy range', 'underweight range']

  if(BMI>=40){
    return index[0]
  }
  if(BMI>=30){
    return index[1]
  }
  if(BMI>=25){
    return index[2]
  }
  if(BMI>=18.5){
    return index[3]
  }
  if(BMI<18.5){
    return index[4]
  }

}

function getBMI(height,weight) {
  const BMI = weight/(height*height)
  return BMI.toFixed(2)
}


function createP() {
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#result')
  resultado.innerHTML = ''

  const p = createP()
  isValid ? p.classList.add('p-result'):p.classList.add('p-notValid')
  p.innerHTML = msg
  resultado.appendChild(p)
}