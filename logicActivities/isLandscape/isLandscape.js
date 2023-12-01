function isLandscape(height, width){
  return width>height
}

let landscape = isLandscape(10,20)
console.log('isLandscape: H-10,W-20\n')
let notLandscape = isLandscape(20,10)
console.log('notLandscape: H-20,W-10\n')

console.log(`isLandscape:${landscape}\nnotLandscape:${notLandscape}`)