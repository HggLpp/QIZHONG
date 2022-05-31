function sayHello(){
  var response = prompt("What's your name?");
  if (response) {
  document.getElementById("name").innerHTML = "Hello," + response;
}
}

function enterAnswer(){
  var response = prompt();
  if (response === "Silence"){
    alert("Not bad!")
  }
  else if (response === "silence"){
    alert("Good!")
  }
  else{
    alert("Are you sure?")
    alert("Wrong, think about it again.")
  }
}

function getAnswer(){
  var x = document.getElementById("answer1");
  x.innerHTML = "Silence";
  x.style.fontSize = "35px";
  x.style.color = "green";
}

function getTips(){
var tips = ["This is a state.","It is gold.","..."];
for(i=0;i<3;i++){
  alert(tips[i]);
}
}
