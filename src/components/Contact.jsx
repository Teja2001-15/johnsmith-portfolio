import { motion } from 'framer-motion'

const Contact = () => {
	return (
		<section
			className='py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500'
			id='contact'>
			<div className='max-w-3xl mx-auto text-center'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					viewport={{ once: true }}>
					Get in Touch
				</motion.h2>

				<motion.form
					action='https://formspree.io/f/your_form_id' // Replace with your actual Formspree form ID or remove `action` to handle manually
					method='POST'
					className='space-y-6 text-left'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					viewport={{ once: true }}>
					<div>
						<label className='block text-gray-700 dark:text-gray-300 mb-1'>
							Name
						</label>
						<input
							type='text'
							name='name'
							required
							className='w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight'
						/>
					</div>
					<div>
						<label className='block text-gray-700 dark:text-gray-300 mb-1'>
							Email
						</label>
						<input
							type='email'
							name='email'
							required
							className='w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight'
						/>
					</div>
					<div>
						<label className='block text-gray-700 dark:text-gray-300 mb-1'>
							Message
						</label>
						<textarea
							name='message'
							rows='5'
							required
							className='w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight'></textarea>
					</div>
					<button
						type='submit'
						className='bg-gray-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-primary hover:text-black transition'>
						Send Message
					</button>
				</motion.form>
			</div>
		</section>
	)
}

export default Contact
