'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


function MultiItemCarousel({ newsItems, onVoirPlus }) {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const timeoutRef = useRef(null)

  // Dynamically update items per view based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsPerView(1) // Mobile
      } else if (width < 1024) {
        setItemsPerView(2) // Tablets
      } else {
        setItemsPerView(4) // Desktops
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Auto-slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext()
    }, 10000)
    return () => clearTimeout(timeoutRef.current)
  }, [index, itemsPerView])

  const handleNext = () => {
    setIndex((prev) =>
      prev + itemsPerView >= newsItems.length ? 0 : prev + itemsPerView
    )
  }

  const handlePrev = () => {
    setIndex((prev) =>
      prev - itemsPerView < 0
        ? Math.max(newsItems.length - itemsPerView, 0)
        : prev - itemsPerView
    )
  }

  // Prepare the items to be displayed
  const visibleItems = newsItems.slice(index, index + itemsPerView)
  const isWrapping = visibleItems.length < itemsPerView
  const itemsToDisplay = isWrapping
    ? [...visibleItems, ...newsItems.slice(0, itemsPerView - visibleItems.length)]
    : visibleItems

  return (
    <div className="relative w-full mx-auto overflow-hidden px-4 py-16">
      {/* Navigation Arrows */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Carousel Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {itemsToDisplay.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                <p className="text-gray-700 line-clamp-3">{item.summary}</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <button
                  onClick={() => onVoirPlus(item)} // 🔥 Callback passed from parent
                  className="bg-[#9a6023] text-white px-4 py-2 rounded-full cursor-pointer"
                >
                  Voir Plus
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MultiItemCarousel
