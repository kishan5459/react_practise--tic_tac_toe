import { Navbar } from './Components/Navbar/Navbar'
import { TicTacToe } from './Components/TicTacToe/TicTacToe'
import useLocalStorage from 'use-local-storage';
import { createContext } from 'react';

export const ThemeContext = createContext();

function App() {

  const preferences = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark,setIsDark] = useLocalStorage('isDark',preferences);

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <ThemeContext.Provider value={{isDark,setIsDark}}>
        <Navbar />
      </ThemeContext.Provider>
      <TicTacToe/>
    </div>
  )
}

export default App
