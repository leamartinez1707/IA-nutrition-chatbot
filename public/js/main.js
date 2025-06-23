let sendButton = document.querySelector("#chat_button");
let text = document.querySelector("#chat_input")
const chatContainer = document.querySelector(".chat_messages");

const displayMessage = (message, sender) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat_message");
  messageElement.classList.add(sender === "user" ? "chat_message--user" : "chat_message--bot");
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}

const sendMessage = async () => {

  let inputText = text.value.trim();

  if (!inputText) {
    alert("Porfavor, escriba un texto a traducir y seleccione un idioma.");
    return false;
  }
  inputText.value = ""; // Limpiar el campo de entrada
  // Mostrar el mensaje del usuario en la interfaz
  displayMessage(inputText, "user");
  setTimeout(() => {
    displayMessage("Cargando...", "bot");
  }, 300); // Delay para el bot.

  // Peticion a la API
  try {
  
  } catch (error) {

  }

};

text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    sendMessage(); // Trigger the click event on the send button
  }
});
sendButton.addEventListener("click", () => {
  const newMessage = text.value.trim();
  if (newMessage) {
    sendMessage();
  } else {
    alert("Por favor, ingrese un mensaje antes de enviar.");
  }
});


