import React, { useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = React.useState(false)

	useEffect(() => {
		const savedMode = localStorage.getItem('theme')
		if (savedMode === 'dark') {
			setDarkMode(true)
		}
	}, [])

	const toggleTheme = () => {
		setDarkMode((prev) => !prev)
		localStorage.setItem('theme', darkMode ? 'light' : 'dark')
		console.log(localStorage.getItem('theme'))
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
