import { motion } from 'framer-motion'
import skills from '../data/skills'

const Skills = () => {
	return (
		<section
			id='skills'
			className='py-20 px-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500'>
			<div className='max-w-6xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white'>
					Skills & Tech Stack
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
					{Object.entries(skills).map(([category, tech], index) => (
						<motion.div
							key={category}
							className='bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700'
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							viewport={{ once: true }}>
							<h3 className='text-xl font-semibold text-primary mb-4'>
								{category}
							</h3>
							<div className='flex flex-wrap gap-2'>
								{tech.map((item, i) => (
									<span
										key={i}
										className='px-3 py-1 bg-gray-700 text-white text-sm rounded-full shadow-sm'>
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
