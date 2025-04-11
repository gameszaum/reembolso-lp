'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Rimborso() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef.current?.currentTime || 0
      if (currentTime >= 10) {
        setShowButton(true)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="bg-[#f8f8f8] shadow-lg rounded-xl w-full max-w-[900px] mx-auto p-4 sm:p-8 flex flex-col items-center">

        <Image
          src="/comprasicura.png"
          alt="Logo CompraSicura"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-6"
          priority
        />

        <div className="relative w-full">
          <video
            ref={videoRef}
            className="w-full min-h-[220px] rounded-xl shadow-lg object-cover"
            src="/video.mp4"
            autoPlay
            controls={false}
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full bg-transparent hover:bg-transparent focus:bg-transparent flex items-center justify-center z-10"
          >
            <span className={`text-white text-[60px] pointer-events-none ${paused ? 'animate-pulse-scale' : ''}`}>
              {paused ? '▶️' : ''}
            </span>
          </button>
        </div>

        {showButton && (
          <button
            className="mt-8 bg-[#f5a800] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#e69500] hover:cursor-pointer transition-colors duration-300 shadow-md pulse-scale"
            onClick={() => window.location.href = 'https://checkout.imperialpay.com.br/checkout/cm938bmc701qs7nbhl4exa6wi?offer=7UOCIS5'}
          >
            Procedi con il rimborso
          </button>
        )}
      </div>
      <div className="block sm:hidden w-full mt-10 overflow-hidden">
        {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Cosa dicono i nostri clienti</h2> */}

        <div className="relative w-full overflow-hidden px-2 py-4">
          <div className="grid grid-rows-2 grid-cols-2 gap-3 w-[150%] animate-marquee-2x2">
            {[
              { name: "Luca R.", stars: 5, message: "Servizio clienti impeccabile! Ho ricevuto il rimborso rapidamente. Comprerò di nuovo, grazie!", img: 'luca' },
              { name: "Giulia M.", stars: 4, message: "Avevo un problema con il prodotto, ma il rimborso è stato facile e veloce. Ottimo supporto!", img: 'giulia' },
              { name: "Marco D.", stars: 5, message: "Nonostante l'inconveniente, l'assistenza è stata perfetta. Riacquisterò senza dubbi.", img: 'marco' },
              { name: "Chiara B.", stars: 5, message: "Mi hanno aiutato subito e ho ricevuto il rimborso in pochi giorni. Bravissimi!", img: 'chiara' },
            ].map((review, idx) => (
              <div
                key={`${review.img}-${idx}`}
                className="min-w-[160px] bg-white rounded-xl shadow-md p-3 flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={`/avatars/${review.img}.png`}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200 shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-black text-sm">{review.name}</div>
                    <div className="text-yellow-500 text-xs">
                      {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-700">{review.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}