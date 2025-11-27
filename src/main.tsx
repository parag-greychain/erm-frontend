import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--color-primary)',
          borderRadius: 8,
          fontFamily: 'Figtree, sans-serif'
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
