import { createContext, useState, useContext, useEffect } from 'react'

export const ThemeContext = createContext(null)

export const useTheme = () => {
	return useContext(ThemeContext)
}
