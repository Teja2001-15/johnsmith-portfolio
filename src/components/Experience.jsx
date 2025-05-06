import { motion } from 'framer-motion'

const Experience = () => {
	return (
		<section
			id='experience'
			className='py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-500'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white'>
					Experience
				</h2>

				<div className='space-y-8'>
					<motion.div
						className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						viewport={{ once: true }}>
						<h3 className='text-xl font-semibold text-highlight mb-2'>
							Senior Game Developer @ GameWorks Inc.
						</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
							2016 – Present
						</p>
						<p className='text-gray-700 dark:text-gray-300'>
							Led the development of 5+ commercial game titles using Unity and
							Unreal Engine. Integrated multiplayer features, optimized
							performance, and mentored junior devs.
						</p>
					</motion.div>

					<motion.div
						className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}>
						<h3 className='text-xl font-semibold text-highlight mb-2'>
							Software Engineer @ WebTech Solutions
						</h3>
						<p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
							2011 – 2016
						</p>
						<p className='text-gray-700 dark:text-gray-300'>
							Developed full-stack web applications using Spring Boot and React.
							Delivered agile releases and collaborated with design and QA
							teams.
						</p>
					</motion.div>
				</div>

				<div className='text-center mt-10'>
					<a
						href='/johnsmith_resume.pdf'
						download
						className='inline-block bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-primary hover:text-black transition'>
						Download Resume
					</a>
				</div>
			</div>
		</section>
	)
}

export default Experience
