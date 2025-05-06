import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpeg'

const Hero = () => {
	return (
		<section
			className='flex flex-col items-center justify-center text-center py-20 px-4'
			id='home'>
			<motion.img
				src={profileImg}
				alt='John Smith'
				className='w-32 h-32 rounded-full border-4 border-accent shadow-lg mb-6'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			/>
			<motion.h1
				className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}>
				John Smith
			</motion.h1>
			<motion.p
				className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mt-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}>
				Senior Software Engineer & Veteran Game Developer. Passionate about
				books, music, movies, traveling, and learning new things.
			</motion.p>
		</section>
	)
}

export default Hero
