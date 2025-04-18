# 🚀 CryptoTracker

A responsive and real-time cryptocurrency tracking app built with React, Vite, and TypeScript.  
It shows live prices, allows favorites tracking, and displays historical price charts using the CoinGecko API.

---

## 📸 Features

- ✅ Real-time crypto price updates (every 30 seconds)
- 🌟 Mark and manage favorite cryptocurrencies
- 📈 Interactive historical price chart (Chart.js)
- 🧠 Global state management using Context API (Redux-like structure)
- 💾 Favorites persisted with localStorage
- 🎨 Modular CSS per component (no global styles)

---

## 🛠️ Tech Stack

- [React + TypeScript](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`
- [CoinGecko API](https://www.coingecko.com/en/api)
- Context API for global state
- CSS Modules for styling

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/cryptotracker.git
cd cryptotracker

# Install dependencies
npm install

# Run on http://localhost:5173/
npm run dev 
