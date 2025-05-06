import { motion } from 'framer-motion'

const About = () => {
	return (
		<section
			id='about'
			className='py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					viewport={{ once: true }}>
					About Me
				</motion.h2>

				<motion.p
					className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					viewport={{ once: true }}>
					I’m John Smith — a senior software engineer and veteran game developer
					with a passion for immersive storytelling, pixel-perfect experiences,
					and clean code. I’ve been crafting games and software professionally
					for over a decade.
				</motion.p>

				<motion.p
					className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					viewport={{ once: true }}>
					When I’m not writing code or debugging game mechanics, you’ll find me
					diving into sci-fi novels, curating playlists, catching up on movies,
					or planning my next travel adventure. I’m driven by curiosity and love
					learning new things — from frameworks to philosophies.
				</motion.p>

				<motion.p
					className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					viewport={{ once: true }}>
					Let’s build something amazing — or talk about your favorite game world
					over coffee!
				</motion.p>
			</div>
		</section>
	)
}

export default About
