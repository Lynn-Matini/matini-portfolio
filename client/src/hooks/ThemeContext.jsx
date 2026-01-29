// import { createContext } from 'preact';
// import { useContext, useEffect, useState } from 'preact/hooks';

// const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   const toggleTheme = () => setDarkMode((prev) => !prev);

//   useEffect(() => {
//     const root = 
//   })
// };

// import { useContext, useEffect, useState } from 'preact/hooks';
// import { createContext } from 'preact';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme;
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ThemeProvider;
// export const useTheme = () => useContext(ThemeContext);
