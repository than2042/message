const formMessage = document.getElementById("submit");

formMessage.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formMessage);
  const formValue = Object.fromEntries(formData);

  fetch("http://localhost:8080/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValue),
  });
  console.log(formValue);
});
