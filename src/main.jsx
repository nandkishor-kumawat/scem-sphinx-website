import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: 'top',duration:2500,isClosable:true, } }}>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
)
