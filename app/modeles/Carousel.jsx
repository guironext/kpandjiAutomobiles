'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

const images = [
  {
    src: '/modeles/Djet.png',
    title: 'KPANDJI-DJETRAN',
    description: '',
  },
  {
    src: '/modeles/Cav.png',
    title: 'KPANDJI-CAVALLY',
    description: '',
  },
  {
    src: '/modeles/Lat.png',
    title: 'KPANDJI-LATHAYE',
    description: '',
  },
  {
    src: '/modeles/Sou.png',
    title: 'KPANDJI-SOURALAI',
    description: '',
  },
  {
    src: '/modeles/Kac.png',
    title: 'KPANDJI-KACCE',
    description: '',
  },
 
]


export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const [modalImage, setModalImage] = useState(null)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const visibleIndices = [
    wrap(0, images.length, page - 1),
    wrap(0, images.length, page),
    wrap(0, images.length, page + 1),
  ]

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [page])

  return (
    <>
      <div
        className="w-full py-16 bg-cover bg-center relative "
        style={{ backgroundImage: "url('/carouselBg.jpg')" }}
      >
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-end gap-4 overflow-hidden">
            {visibleIndices.map((idx, i) => {
              const isCenter = i === 1
              const image = images[idx]

              return (
                <motion.div
                  key={image.src}
                  className="flex flex-col items-center justify-end w-1/3"
                >
                  <motion.img
                    src={image.src}
                    onClick={() => setModalImage(image.src)}
                    initial={{ scale: isCenter ? 1.1 : 0.9 }}
                    animate={{ scale: isCenter ? 1.25 : 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="object-contain cursor-pointer drop-shadow-xl mt-12"
                    style={{
                      width: isCenter ? '100%' : '85%',
                      maxHeight: isCenter ? 420 : 300,
                      height: 'auto',
                    }}
                  />

                  {isCenter && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-center mt-6 text-white max-w-sm"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.03 } },
                      }}
                    >
                      <motion.h3 className="text-xl font-bold flex justify-center flex-wrap py-4 bg-amber-700 rounded-xl px-2  mt-12 ">
                        {image.title.split('').map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.h3>

                      <motion.p className="text-sm opacity-80 mt-1 flex justify-center flex-wrap">
                        {image.description.split(' ').map((char, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.p>

                    
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hidden sm:flex"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hidden sm:flex"
          >
            ›
          </button>

          {/* Dots 
          <div className="flex gap-2 mt-6 justify-center">
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
          */}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              className="max-w-[100vw] max-h-[100vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
