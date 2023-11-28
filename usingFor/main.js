const domElements = document.querySelector('#elementsArray')
const elements = [

  {tag: 'p', text:'Phrase 1'},
  {tag: 'div', text:'Phrase 2'},
  {tag: 'footer', text:'Phrase 3'},
  {tag: 'section', text:'Phrase 4'},

]
  
for(let i = 0; i < elements.length; i++){

  const newTag = document.createElement(elements[i].tag)
  newTag.innerHTML = elements[i].text
  domElements.appendChild(newTag)

}

