import React from 'react'
import { useThemeContext } from '../context/ThemeContext';

const Blog = () => {
  const { theme } = useThemeContext();
  console.log("inside Blog", theme)
  return (
    <div>Blog</div>
  )
}

export default Blog