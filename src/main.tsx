import { createRoot } from 'react-dom/client'
import { CryptoProvider } from './context/CryptoContext';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <CryptoProvider>
      <App />
    </CryptoProvider>
)
