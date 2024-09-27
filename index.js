const plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
number = document.querySelector(".number");

let a = 1;

plus.addEventListener("click", function () {
  a++;
  number.innerText = a;
  console.log(a);
});

minus.addEventListener("click", function () {
  if (a > 0) {
    a--;
  }

  number.innerText = a;
  console.log(a);
});
