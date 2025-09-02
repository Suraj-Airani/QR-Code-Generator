import React from 'react'
import { Toaster } from 'react-hot-toast'
import QRCodeGenerator from './components/QRGenerator'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16 py-10 gap-12">
      <Header />
      <QRCodeGenerator />
      <Footer />
    </div>
  )
}

export default App