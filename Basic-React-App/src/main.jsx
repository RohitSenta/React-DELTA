import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AmazonCard from './AmazonCard.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AmazonCard/>
  </React.StrictMode>
)
