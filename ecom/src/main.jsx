import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import store from './redux/store.js'
// import theme from '../theme.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>

)
