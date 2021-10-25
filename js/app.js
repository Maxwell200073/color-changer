const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "Aqua", "Aquamarine", "BlueViolet",
"BurlyWood", "Chartreuse", "Chocolate", "CornflowerBlue", "DarkMagenta", "DarkOrange", "DarkSalmon", "Fuchsia",
"LightGoldenRodYellow"];
//linking into button
const btn = document.getElementById('btn');
//linking to text in h1
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  // random number for accessing different indexes of colors
  const randomNumber =  numberGenerator()
  document.body.style.backgroundColor = colors[randomNumber];
  //changing the text in h1 to corressponding index in colors
  color.textContent = colors[randomNumber];
})

//getting random num within array index using its length
function numberGenerator(){
  return Math.floor(Math.random()*colors.length);
}
