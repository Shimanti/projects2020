let total = 0
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

function plus() {
  let n1 = Number(document.querySelector('#number1').value)
  let n2 = Number(document.querySelector('#number2').value)
  total = n1 + n2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function minus() {
  let n1 = Number(document.querySelector('#number1').value)
  let n2 = Number(document.querySelector('#number2').value)
  total = n1 - n2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function multiply() {
  let n1 = Number(document.querySelector('#number1').value)
  let n2 = Number(document.querySelector('#number2').value)
  total = n1 * n2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function divide() {
  let n1 = Number(document.querySelector('#number1').value)
  let n2 = Number(document.querySelector('#number2').value)
  total = n1 / n2
  document.querySelector('#placeToPutResult').innerHTML = total
}
