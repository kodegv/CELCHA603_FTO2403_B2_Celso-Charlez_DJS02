const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //clear previous result
  result.innerText = ' ';

  //check if inputs are empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  //convert inputs to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);

  //check if unputs are valid numbers
  if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
    console.error("Invalid input provided");
    result.innerText = "Something critical went wrong. Please reload the page.";
    // Optionally, you can force a page reload
    // location.reload();
    return;
  }

  // Check for division by zero
  if (dividerNumber === 0) {
    console.error("Attempted division by zero");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }