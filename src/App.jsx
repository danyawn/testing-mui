import { ThemeProvider } from '@emotion/react'
import './App.css'
import { theme } from './theme'
import FormInput from './pages/FormInput'
import Navbar from './pages/Navbar'
import { CssBaseline } from '@mui/material'

function App() {


  return (
    <div className='App'>
      <CssBaseline />
      <Navbar />
      <FormInput />
    </div>
  )
}

export default App
