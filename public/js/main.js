let sendButton = document.querySelector("#chat_button");
let text = document.querySelector("#chat_input")
const chatContainer = document.querySelector(".chat_messages");

const userID = 'anon' + new Date().getTime(); // Unique user ID based on timestamp

const displayMessage = (message, sender) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat_message");
  messageElement.classList.add(sender === "user" ? "chat_message--user" : "chat_message--bot");

  if (sender === "bot") {
    messageElement.classList.add("chat_message--ia");
  }

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
  text.value = ""; // Limpiar el campo de entrada
  // Mostrar el mensaje del usuario en la interfaz
  displayMessage(inputText, "user");
  displayMessage("Cargando...", "bot");

  // Peticion a la API
  try {

    const response = await fetch("/api/get-nutrition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userID,
        message: inputText
      })
    })

    const data = await response.json();
    console.log(data)
    const botMessage = chatContainer.querySelectorAll(".chat_message--ia");
    const lastBotMessage = botMessage[botMessage.length - 1];

    if (lastBotMessage) {
      if (data.message.length >= 100) {
        const md = new markdownit();
        const htmlContent = md.render(data.message);
        lastBotMessage.innerHTML = htmlContent; // Use innerHTML to render HTML content
      } else {
        lastBotMessage.textContent = data.message; // Update the text content
      }
      chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    } else {
      displayMessage(data.message, "bot"); // Mostrar el mensaje del bot en la interfaz
    }

  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    displayMessage("Lo siento, ocurrió un error al procesar tu solicitud.", "bot");
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


