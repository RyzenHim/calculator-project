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

//this to toggle dark and light mode;

let themeToggle = document.querySelector("#day");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("day_mode");

  if (document.body.classList.contains("day_mode")) {
    themeToggle.src = "assets/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg";
  } else {
    themeToggle.src = "assets/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg";
  }
});
