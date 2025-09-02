"use client"

import { useState } from 'react'

const PinEntryPage = () => {
  const [pin, setPin] = useState<string>('')

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num
      setPin(newPin)
      
      // Log the PIN when 4 digits are entered
      if (newPin.length === 4) {
        console.log('PIN Entered:', newPin)
      }
    }
  }

  const handleClear = () => {
    setPin('')
  }

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1))
  }

  const numbers = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['C', '0', '<']
  ]

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="flex flex-col items-center space-y-12 bg-white p-8 rounded-md ">
        {/* Header */}
        <h1 className="text-xl font-medium text-gray-800 mb-8">
          Enter Your 4-digit Pin
        </h1>

        {/* PIN Display */}
        <div className="flex space-x-4 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-16 h-20 rounded-2xl border-2 flex items-center justify-center text-3xl font-bold ${
                pin.length > index
                  ? 'border-slate-600 bg-white text-slate-800'
                  : 'border-gray-300 bg-white text-transparent'
              }`}
            >
              {pin.length > index ? pin[index] : ''}
            </div>
          ))}
        </div>

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-4">
          {numbers.map((row, rowIndex) => 
            row.map((item, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => {
                  if (item === 'C') {
                    handleClear()
                  } else if (item === '<') {
                    handleBackspace()
                  } else if (item !== 'C' && item !== '<') {
                    handleNumberClick(item)
                  }
                }}
                className={`w-20 h-20 rounded-full text-xl font-semibold transition-all duration-150 active:scale-95 ${
                  item === 'C' || item === '<'
                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                    : 'bg-[#9FC85E] text-white hover:bg-[#9FC85E]'
                }`}
                disabled={item !== 'C' && item !== '<' && pin.length >= 4}
              >
                {item === '<' ? '←' : item}
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default PinEntryPage