import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// I'm going to remove React.StrictMode, it prints unnecessary stuff
// and will do even more harm when we're going to talk about
// component lifecycle

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
