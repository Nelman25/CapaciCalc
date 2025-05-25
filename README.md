# CapaciCalc: Capacitor Charge-Discharge Calculator

## 📝 Overview
CapaciCalc is an interactive capacitor charge-discharge calculator I developed as my Physics 2 final project. This tool provides:

- **Real-time calculations** of capacitor voltage during charge/discharge cycles
- **Visualization** of the exponential charge/discharge curve
- **AI-powered explanations** for understanding the physics behind the results

## ✨ Features

### ⚡ Core Calculator
- Calculate instantaneous voltage at any time point
- Supports both charging and discharging scenarios
- Automatic time constant (τ = RC) calculation
- Unit conversions for capacitance (F, μF, nF, pF) and resistance (Ω, kΩ, MΩ)

### 📊 Visualization
- Interactive graph showing the complete charge/discharge curve
- Highlighted time constant (τ) markers
- Real-time updates as parameters change

### 🤖 AI Physics Assistant
- Built-in chatbot powered by Gemini API
- Ask follow-up questions about:
  - Calculation results
  - Physics concepts
  - Circuit behavior explanations
- Provides formatted responses with Markdown support

## 🛠️ Technical Implementation

### Frontend
- **React** with TypeScript
- **Zustand** for state management
- **Chart.js** + **react-chartjs-2** for visualization
- **ShadCN** UI components for clean interface

### AI Integration
- Google's **Gemini API** for physics explanations
- Dynamic prompt engineering for technical responses
- Response formatting with Markdown support

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Google Gemini API key (for AI features)

### Installation
```bash
git clone https://github.com/yourusername/capacicalc.git
cd capacicalc
npm install
```

### Configuration
Create a `.env` file:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### Running
```bash
npm run dev
```

## 📚 Physics Concepts Implemented

### Key Formulas
- Time constant: τ = RC
- Charging: V(t) = V₀(1 - e^(-t/τ))
- Discharging: V(t) = V₀e^(-t/τ)

### Graph Features
- Shows 0 → 5τ range (99.3% complete charge/discharge)
- Exponential curve visualization
- Dynamic scaling based on circuit parameters

---
