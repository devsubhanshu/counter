const plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
number = document.querySelector(".number");
 
let a = 1;

function mataintwodigit(a){
 if(a<10){ 
  return "0" + a;
 }
 return a;
}

plus.addEventListener("click", function () {
  a++;    
  number.innerText = mataintwodigit(a);
  console.log(a);
});

minus.addEventListener("click", function () {
  if (a > 0) {
    a--;
  }

  number.innerText = mataintwodigit(a);
  console.log(a);
});
