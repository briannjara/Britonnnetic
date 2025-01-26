import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import logo from './assets/the-logo.png'

function App() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-container">
        <header className="header">
          <h2>{isSignUp ? 'SIGN UP' : 'LOGIN'}</h2>
          <span onClick={toggleTheme} className="theme-icon">
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </span>
        </header>
        {isSignUp ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </div>
    </div>
  )
}

export default App
