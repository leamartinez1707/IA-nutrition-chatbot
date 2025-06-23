import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateDiet = async (userData) => {
  const prompt =
  {
    role: "system", content: `
  Eres un experto en nutrición y tu tarea es crear un plan de nutrición personalizado basado en la información del usuario. El plan debe ser semanal, osea 7 dias, no mas que eso.
  El usuario te proporcionará su peso, altura, objetivo de nutrición, alergías, alimentos que no le gustan y el número de comidas diarias que desea realizar.
  El usuario solo puede hacer preguntas relacionadas con su plan de nutrición.
  Crea un plan de nutrición detallado que incluya:
  - Desayuno
  - Almuerzo
  - Cena
  - Snacks
  
  Asegúrate de que el plan sea saludable, equilibrado y adaptado a las preferencias y restricciones del usuario.
  
  Responde solo con el plan de nutrición, no puedes responder a otras preguntas que no sean sobre el plan de nutrición.
  Si el usuario no te proporciona alguno de los datos, interpretalo tu mismo. (Por ejemplo si el usuario no te dice el peso pero si te dice la altura, puedes asumir un peso promedio para su altura).
  `};

  const propmtUser = {
    role: "user", content: `Crear un plan de nutrición basado en la siguiente información del usuario:
  - Peso: ${userData.peso} kg
  - Altura: ${userData.altura} cm
  - Objetivo que debes considerar para la dieta: ${userData.objetivo}
  - Alergías: ${userData.alergia}
  - Alimentos que no le gustan y debes evitar: ${userData.comidasCanceladas}
  - Comidas diarias que el usuario quiere hacer: ${userData.comidasDiarias}
  - Devuelve el plan de nutrición en formato de tabla markdown, con las siguientes columnas:
   Día | Desayuno | Almuerzo | Cena | Snacks | Calorias
   Y no digas nada más, solo devuelve la tabla.
  `};

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [prompt, propmtUser],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    return res.status(500).json({
      error: "Error al generar el plan de nutrición. Por favor, inténtalo de nuevo más tarde.",
    });

  }
}

let userData = {}

app.post("/api/get-nutrition", async (req, res) => {


  // Por defecto preguntamos el peso al usuario

  // Recibir peso del usuario y id
  const userId = req.body.userId;
  const userMessage = req.body.message;

  if (!userData[userId]) {
    userData[userId] = {};
  }

  if (!userData[userId].peso) {
    userData[userId].peso = userMessage;

    return res.json({
      message: "Por favor, ingresa tu altura en cm.",
    });
  }
  if (!userData[userId].altura) {
    userData[userId].altura = userMessage;

    return res.json({
      message: "¿Cual es tu objetivo? (Perder peso, mantener peso, ganar masa muscular)",
    });
  }

  if (!userData[userId].objetivo) {
    userData[userId].objetivo = userMessage;

    return res.json({
      message: "¿Tienes alguna alergía?",
    });
  }
  if (!userData[userId].alergia) {
    userData[userId].alergia = userMessage;

    return res.json({
      message: "¿Que alimentos no te gustan?",
    });
  }
  if (!userData[userId].comidasCanceladas) {
    userData[userId].comidasCanceladas = userMessage;

    return res.json({
      message: "¿Cuantas comidas quieres hacer por día?",
    });
  }
  if (!userData[userId].comidasDiarias) {
    userData[userId].comidasDiarias = userMessage;
    // Ejecutar peticion con OpenAI

    const diet = await generateDiet(userData[userId]);

    // Recoger respuesta de OpenAI y responder al usuario

    return res.json({
      message: `¡Gracias por tus respuestas! Ya tienes tu plan de nutrición: \n ${diet}`,
    });
  }

  if (userData[userId].peso && userData[userId].altura && userData[userId].objetivo && userData[userId].alergia && userData[userId].comidasCanceladas && userData[userId].comidasDiarias) {
    userData[userId] = {}
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
