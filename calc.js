let input = document.querySelector(".input");

let calculate = (number) => {
  // input.value= input.value+number;
  input.value += number;
};

//condition to handle the exception such as multiple operator at same time .
let result = () => {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("Enter valid sequence ");
  }
};

function clr() {
  input.value = " ";
}

function del() {
  // let value = input.value;
  // input.value = value.substr(0, value.length - 1);

  input.value = input.value.slice(0, -1);
}
