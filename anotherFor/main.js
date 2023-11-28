const paragraph = document.querySelector('.paragraph')
const ps = paragraph.querySelectorAll('p')

const bodyStyles = getComputedStyle(document.body)
const bodyBackground = bodyStyles.backgroundColor

for (const p of ps) {
  p.style.backgroundColor = bodyBackground
}