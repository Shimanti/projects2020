document.querySelector('#tree1').addEventListener('click', xmas)

function xmas() {
	document.querySelector('h1').innerHTML = "Merry Christmas & Happy Holidays!"
	document.querySelector('h2').innerHTML = "All my love, Shimanti"
	document.querySelector('#tree1').style.display = "none"
  document.querySelector('#tree2').style.display = "inherit"
}
