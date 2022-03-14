const calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", calculateAmount);

function calculateAmount(e) {
  e.preventDefault(); /* Не перезагружать страницу автоматически при делении amountPerPerson*/
  const bill = document.querySelector("#bill").value;
  const people = document.querySelector("#people").value;
  const tip = document.querySelector("#tip").value;

  if (bill === "" || people === "" || people < 1 || bill === NaN || people === NaN) {
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!',
      })
  }

  let amountPerPerson = bill / people;

  let tipPerPerson = (bill * tip) / people;

  let totalSum = amountPerPerson + tipPerPerson;

  //ToFixed() - Add cents to each money field
  amountPerPerson = amountPerPerson.toFixed(2);
  tipPerPerson = tipPerPerson.toFixed(2);
  totalSum = totalSum.toFixed(2);

  // Show everything in the app
  document.querySelector("#dividedBill").textContent = amountPerPerson;
  document.querySelector("#dividedTip").textContent = tipPerPerson;
  document.querySelector("#billAndTip").textContent = totalSum;
}
