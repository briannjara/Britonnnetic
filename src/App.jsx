import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import logo from './assets/the-logo.png'

function App() {
  const [currentForm, setCurrentForm] = useState('login') // 'login', 'signup', or 'forgot'
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const renderForm = () => {
    switch(currentForm) {
      case 'signup':
        return <SignUp toggleForm={() => toggleForm('login')} />
      case 'forgot':
        return <ForgotPassword toggleForm={() => toggleForm('login')} />
      default:
        return <Login 
          toggleForm={() => toggleForm('signup')} 
          forgotPassword={() => toggleForm('forgot')}
        />
    }
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-container">
        <header className="header">
          <h2>
            {currentForm === 'signup' ? 'SIGN UP' : 
             currentForm === 'forgot' ? 'FORGOT PASSWORD' : 
             'LOGIN'}
          </h2>
          <span onClick={toggleTheme} className="theme-icon">
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </span>
        </header>
        {renderForm()}
      </div>
    </div>
  )
}

export default App
