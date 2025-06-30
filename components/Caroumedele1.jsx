'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

function Caroumedele() {
    const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const visibleIndices = [
    wrap(0, images.length, page - 1),
    wrap(0, images.length, page),
    wrap(0, images.length, page + 1),
  ]

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000)
    return () => clearInterval(timer)
  }, [page])
  return (
    <div className="relative w-full max-w-5xl h-96 mx-auto flex flex-col items-center justify-center">
      <div className="relative flex gap-6 justify-center items-center overflow-hidden w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          {visibleIndices.map((idx, i) => {
            const isCenter = i === 1

            return (
              <motion.img
                key={images[idx]}
                src={images[idx]}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) > 100

                  if (swipe) {
                    paginate(offset.x < 0 ? 1 : -1)
                  }
                }}
                initial={{ opacity: 0, scale: isCenter ? 1.3 : 1 }}
                animate={{ opacity: 1, scale: isCenter ? 1.5 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl object-cover shadow-xl"
                style={{
                  width: isCenter ? '300px' : '200px',
                  height: isCenter ? '300px' : '200px',
                  zIndex: isCenter ? 10 : 5,
                }}
              />
            )
          })}
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${
              i === imageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Caroumedele