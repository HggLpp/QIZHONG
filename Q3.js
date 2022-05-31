function enterAnswer(){
  var response = prompt();
  if (response === "Love"){
    alert("Excellent!")
    alert("Congradulations!You finish all the puzzles!")
  }
  else if (response === "love"){
    alert("Great!")
    alert("Congradulations!You finish all the puzzles!")
  }
  else{
    alert("Are you sure?")
    alert("Wrong, think about it again.")
  }
}

function getAnswer(){
  var x = document.getElementById("answer3");
  x.innerHTML = "Love";
  x.style.fontSize = "35px";
  x.style.color = "green";
}

function getTips(){
var tips = ["This is a beautiful thing.","It will make you happy.","❤"];
for(i=0;i<3;i++){
  alert(tips[i]);
}
}
function end(){
  var x = document.getElementById("end");
  x.innerHTML = "Congradulations!  If you want to know more riddles, come to me in Gotham.";
  x.style.fontSize = "20px";
  x.style.color = "green";
}
