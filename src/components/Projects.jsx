import { motion } from 'framer-motion'
import projects from '../data/projects'

const Projects = () => {
	return (
		<section
			id='projects'
			className='py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-500'>
			<div className='max-w-6xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white'>
					Projects
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className='p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							viewport={{ once: true }}>
							<h3 className='text-xl font-semibold text-primary mb-2'>
								{project.title}
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mb-4'>
								{project.description}
							</p>
							<div className='flex flex-wrap gap-2 mb-4 items-center justify-center'>
								{project.tech.map((t, i) => (
									<span
										key={i}
										className='text-sm px-2 py-1 bg-gray-700 text-white rounded'>
										{t}
									</span>
								))}
							</div>
							<a
								href={project.link}
								className='text-highlight hover:underline text-sm font-medium'>
								View Project →
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
