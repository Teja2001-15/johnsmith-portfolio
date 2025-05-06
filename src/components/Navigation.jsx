import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react' // Or use @heroicons/react

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navLinks = [
		'Home',
		'Projects',
		'Skills',
		'Experience',
		'About',
		'Contact',
	]

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-950 shadow-md'>
			<div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
				<h1 className='text-xl font-bold text-highlight'>John Smith</h1>

				{/* Desktop Nav */}
				<nav className='hidden md:flex space-x-6'>
					{navLinks.map((link) => (
						<a
							key={link}
							href={`#${link.toLowerCase()}`}
							className='text-gray-800 dark:text-white hover:text-highlight transition'>
							{link}
						</a>
					))}
				</nav>

				{/* Hamburger Icon for Mobile */}
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						aria-label='Toggle Menu'>
						{isOpen ? (
							<X className='h-6 w-6 text-gray-800 dark:text-white' />
						) : (
							<Menu className='h-6 w-6 text-gray-800 dark:text-white' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						className='md:hidden bg-white dark:bg-gray-950 shadow-lg px-4 py-6 space-y-4'>
						{navLinks.map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
								onClick={() => setIsOpen(false)}
								className='block text-gray-800 dark:text-white hover:text-highlight transition'>
								{link}
							</a>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	)
}

export default Navigation
