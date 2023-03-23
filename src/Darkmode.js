import React, { useState, useEffect } from 'react';
import './Darkmode.css';
function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            
            <button onClick={toggleTheme}>Mode</button>
        </div>
    );
}
export default App;
