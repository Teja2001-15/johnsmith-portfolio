// src/components/Footer.jsx
import { motion } from 'framer-motion'

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-8 mt-16'>
			<div className='max-w-6xl mx-auto flex flex-col items-center space-y-4'>
				{/* Copyright */}
				<motion.p
					className='text-center text-sm'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					&copy; {new Date().getFullYear()} John Smith. All Rights Reserved.
				</motion.p>

				{/* Social Links */}
				<div className='flex space-x-6'>
					<motion.a
						href='https://www.linkedin.com/in/johnsmith'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-highlight'
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}>
						LinkedIn
					</motion.a>
					<motion.a
						href='https://github.com/johnsmith'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-highlight'
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}>
						GitHub
					</motion.a>
					<motion.a
						href='mailto:johnsmith@example.com'
						className='text-white hover:text-highlight'
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}>
						Mail
					</motion.a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
