const size = () => {return(document.getElementById("size-input").value + "px")};  //This is the most efficient way that i could find to read value of an input rapidly
const speed = () => {return((document.getElementById("speed-input").max) - (document.getElementById("speed-input").value) + 1)};
const density = () => {return(1000 - (document.getElementById("density-input").value * 10))}

document.getElementById("density-input").addEventListener("input", function(){  //Need to kill the interval and then start again for density change
  console.log(density());
  clearInterval(cycle);
  cycle = setInterval(CreateSquare, density());
});





document.getElementById("animation-css").innerHTML = 
'@keyframes Animator {' +
  '0% {' + 
    'opacity: 0;' +
    'transform: translateY(0px) rotate(0deg) scale(0);' +
  '}' +
  '10%{' +
    'opacity: 1;' +
  '}' +
  '50% {' +
    'transform: translateY(-150px) rotate(180deg) scale(0.5);' +
  '}' +
  '90%{' +
    'opacity: 1;' +
  '}' +
  '100%{' +
    'opacity: 0;' +
    'transform: translateY(-300px) rotate(360deg) scale(1);' +
    
  '}' +
'}'


function CreateSquare() {
  const zone = document.getElementById("animation-zone");
  const square = document.createElement("div");

  square.style.backgroundColor = RandomHex(6);
  square.style.top = RandomPercentage();
  square.style.left = RandomPercentage();
  
  square.style.width = size();
  square.style.height = size();

  square.style.animation = "Animator " + speed() + "s linear infinite";
  zone.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, speed() * 1000)
}

var cycle = setInterval(CreateSquare, density());
