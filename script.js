let q = [
  {
    question:"भारत की राजधानी क्या है?",
    options:["Mumbai","Delhi","Pune","Chennai"],
    answer:1
  },
  {
    question:"5 + 5 = ?",
    options:["8","9","10","11"],
    answer:2
  }
];

let i = 0;
let score = 0;

function start(){
  show();
}

function show(){
  let html = `<h3>${q[i].question}</h3>`;
  q[i].options.forEach((o,n)=>{
    html += `<button onclick="check(${n})">${o}</button><br>`;
  });
  document.getElementById("quiz").innerHTML = html;
}

function check(n){
  if(n === q[i].answer) score++;
  i++;
  if(i < q.length) show();
  else document.getElementById("result").innerHTML =
       "Score: " + score;
}
