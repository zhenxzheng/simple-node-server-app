var zodiacs = [];

fetch('/zodiacs').then(function(data) {
  return data.json();
}).then(function(data) {
  zodiacs = data;
});

function findSign(){
  console.log(zodiacs);
  var userInput = document.getElementById('horoscopeInput').value;

  var match = false;
  for (var i = 0; i < zodiacs.length; i++) {
    if (zodiacs[i].sign === userInput.toLowerCase()) {
      match = zodiacs[i];
    }
  }
  
  if (match) {
    document.getElementById('displayText').textContent = userInput;
    document.getElementById('signImage').src = match.image;
    document.getElementById('fortuneText').textContent = match.fortune;
  } else {
    document.getElementById('displayText').textContent = `We can't find '${userInput}'.`;
    document.getElementById('signImage').src = '';
    document.getElementById('fortuneText').textContent = '';
  }
}

document.getElementById('horoscopeInput').onkeyup = function(key) {
  if (key.key === "Enter" && key.keyCode === 13) {
    findSign();
  }
}