function enterAnswer(){
  var response = prompt();
  if (response === "Breath"){
    alert("Great!")
  }
  else if (response === "breath"){
    alert("Good!")
  }
  else{
    alert("Are you sure?")
    alert("Wrong, think about it again.")
  }
}

function getAnswer(){
  var x = document.getElementById("answer2");
  x.innerHTML = "Breath";
  x.style.fontSize = "35px";
  x.style.color = "green";
}

function getTips(){
var tips = ["It's going on all the time.","You're doing this.","About your nose."];
for(i=0;i<3;i++){
  alert(tips[i]);
}
}
