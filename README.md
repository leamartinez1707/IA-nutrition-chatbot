# 🥗 IA Nutrition Chatbot

Chatbot inteligente de nutrición que utiliza Inteligencia Artificial para crear planes nutricionales personalizados y semanales. La aplicación utiliza la API de OpenAI para generar recomendaciones dietéticas adaptadas a las necesidades, preferencias y restricciones de cada usuario.

## 📋 Descripción

Este proyecto es una aplicación web interactiva que funciona como un asistente nutricional inteligente. Los usuarios pueden conversar con el chatbot proporcionando información sobre su peso, altura, objetivos nutricionales, alergias y preferencias alimentarias, y recibir un plan de nutrición completo y personalizado para una semana.

## ✨ Funcionalidades

- **📊 Plan nutricional semanal personalizado**: Genera planes de 7 días adaptados a cada usuario
- **🤖 Chatbot conversacional**: Interfaz amigable tipo chat para interactuar con la IA
- **🎯 Personalización completa**: Considera peso, altura, objetivos, alergias y preferencias
- **📱 Interfaz responsive**: Diseño moderno que funciona en dispositivos móviles y desktop
- **📋 Formato de tabla**: Los planes se presentan en formato markdown con tabla organizada
- **⚡ Respuesta en tiempo real**: Procesamiento rápido mediante API de OpenAI

### Características del plan nutricional:
- Desayuno, almuerzo, cena y snacks
- Distribución calórica balanceada
- Adaptación a restricciones alimentarias
- Consideración de alergias
- Objetivos específicos (pérdida de peso, ganancia muscular, mantenimiento, etc.)

## 🛠️ Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **IA**: OpenAI API (GPT)
- **Procesamiento**: Markdown-it para renderizado
- **Gestión de variables**: dotenv
- **Herramientas de desarrollo**: Nodemon

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- NPM (viene incluido con Node.js)
- Clave API de OpenAI

### 1. Clonar el repositorio

```bash
git clone https://github.com/leamartinez1707/IA-nutrition-chatbot.git
cd IA-nutrition-chatbot
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega tu clave API de OpenAI:

```env
OPENAI_API_KEY=tu_clave_api_de_openai_aqui
PORT=3000
```

### 4. Ejecutar la aplicación

#### Modo de desarrollo (con recarga automática):
```bash
npm run dev
```

#### Modo de producción:
```bash
npm start
```

### 5. Abrir en el navegador

Visita `http://localhost:3000` en tu navegador web.

## 💬 Cómo usar el chatbot

1. **Inicia la conversación**: Escribe un mensaje describiendo tus necesidades nutricionales
2. **Proporciona información**: Incluye datos como:
   - Tu peso y altura
   - Objetivo nutricional (pérdida de peso, ganancia muscular, mantenimiento)
   - Alergias alimentarias
   - Alimentos que no te gustan
   - Número de comidas diarias que prefieres
3. **Recibe tu plan**: El chatbot generará un plan nutricional semanal personalizado en formato de tabla
4. **Haz preguntas**: Puedes realizar consultas adicionales sobre tu plan de nutrición

### Ejemplo de consulta:
```
Hola, necesito un plan nutricional. Peso 70kg, mido 1.75m, quiero ganar masa muscular, soy alérgico a los frutos secos, no me gusta el brócoli y prefiero hacer 5 comidas al día.
```

## 📁 Estructura del proyecto

```
IA-nutrition-chatbot/
├── app.js                # Servidor principal de Express
├── package.json          # Dependencias y scripts
├── README.md             # Documentación del proyecto
├── .env                  # Variables de entorno (no incluido)
└── public/               # Archivos estáticos
    ├── index.html        # Página principal
    ├── css/
    │   └── styles.css    # Estilos de la aplicación
    ├── js/
    │   └── main.js       # Lógica del frontend
    └── images/
        └── nutrition.png # Recursos gráficos
```

## 🔒 Seguridad

- Las claves API se manejan mediante variables de entorno
- No se almacenan datos personales del usuario
- Cada sesión genera un ID único temporal
- La comunicación con OpenAI se realiza del lado del servidor

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Leandro Martínez**
- Email: leandromartinez.dev@gmail.com
- GitHub: [@leamartinez1707](https://github.com/leamartinez1707)

## 🙏 Agradecimientos

- OpenAI por proporcionar la API de inteligencia artificial
- La comunidad de desarrolladores por las librerías utilizadas
