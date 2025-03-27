import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
// import {  HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HelmetProvider> */}

      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
    </QueryClientProvider>
    {/* </HelmetProvider> */}
  </StrictMode>,
)
