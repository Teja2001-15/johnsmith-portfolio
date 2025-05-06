import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, setTheme }) {
	return (
		<div className='absolute top-4 right-4'>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='p-2 rounded-full bg-primary text-white dark:bg-highlight transition'>
				{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
			</button>
		</div>
	)
}

export default ThemeToggle
