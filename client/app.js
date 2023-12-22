const formMessage = document.getElementById("submit");

formMessage.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(formMessage);
  const formValue = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValue),
  });

  const json = await response.json();
  console.log(json);
  formMessage.reset(); // reset the form
});

async function displayMessage() {
  const response = await fetch(
    "https://message-server-cue3.onrender.com/message"
  );
  const messages = await response.json();

  messages.map((item) => {
    const pName = document.createElement("p");
    const pMessage = document.createElement("p");

    pName.textContent = item.userName;
    pMessage.textContent = item.message;

    const showMessage = document.getElementById("showMessage");

    showMessage.append(pName);
    pName.append(pMessage);
  });
}

displayMessage();
