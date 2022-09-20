const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  if (email.length === 0) {
    alert("enter EMAIL");
  }
  const password = formEl.password.value;
  if (password.length === 0) {
    alert("enter password");
  }
  const formObj = {
    email,
    password,
  };
  console.log(formObj);
  event.currentTarget.reset();
}
