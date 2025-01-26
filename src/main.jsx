import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

function Main() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <App isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
}

ReactDOM.render(<Main />, document.getElementById('root'));
