import { useState, useEffect } from 'react'
import './index.css'
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import { useTheme } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
	const { darkMode, toggleTheme } = useTheme()

	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500'>
			<Navigation />
			{/* Header Section with Theme Toggle */}
			<header className='bg-white dark:bg-gray-900 fixed w-full z-10 top-0 left-0 px-4 py-4'>
				<div className='flex justify-between items-center max-w-6xl mx-auto'>
					<h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
						John Smith
					</h1>
					<button
						onClick={toggleTheme}
						className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors'>
						{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
					</button>
				</div>
			</header>

			<Hero />
			<Projects />
			<Skills />
			<Experience />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
