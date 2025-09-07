# Nezukoo-BOT

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=flat-square&logo=node.js)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-blue?style=flat-square)
![License GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-red?style=flat-square)

---

## 📌 Project Description
**Nezukoo-BOT** is a WhatsApp automation bot built with **Node.js** using the **Baileys** library.  
It comes with a wide range of plugin-based features, making it flexible, customizable, and ready for both personal and group use.

---

## 📂 Repository Structure

Nezukoo_BOT/
├── lib/ # Core modules and helpers
├── plugins/ # Plugin-based commands and features
├── sessions/ # WhatsApp session files
├── src/
├── views/
├── Dockerfile # Container build file
├── Procfile # For deployment (e.g., Heroku)
├── config.js # Main bot configuration
├── handler.js # Main event handler
├── index.js / main.js # Entry points
├── server.js
├── test.js
├── speed.py # Additional Python utility script
├── thumbnail.jpg
├── package.json
└── README.md


---

## 🚀 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/maumhmd-sh/Nezukoo_BOT.git
   cd Nezukoo_BOT
    ```
   
2. Install dependencies:
```
npm install
```

3. Make sure your system has:
- Node.js (v14 or higher)
- Git
- FFmpeg (for media processing)
- ImageMagick (optional, required by some plugins)

4. Start the bot:
```
npm start
```

5. On the first run, the bot will request WhatsApp login (via QR code or other methods supported by Baileys).
---

## ✨ Features
- Modular plugin system → easy to add or remove features.
- WhatsApp session management with Baileys.
- Media support (images, audio, video) with FFmpeg.
- Docker and deployment-ready (Dockerfile, Procfile).
- Includes speed.py script for extra utilities.

## 📜 License
- This project is licensed under the GPL-3.0 License — open source with copyleft terms.

## 🤝 Contributing
- Fork this repository and make your changes.
- Create a Pull Request describing your update.
- If you encounter bugs or have feature ideas, feel free to open an issue.

## 💖 Support
If you find Nezukoo-BOT useful, don’t forget to give it a ⭐ on GitHub and share it with others!
