"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import type { Product } from "@/types"
import ProductCard from "./ProductCard"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface ProductCarouselProps {
  products: Product[]
  title: string
  viewAllUrl?: string
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title, viewAllUrl = "/shop" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [progressWidth, setProgressWidth] = useState(0)

  const extendedProducts = [...products, ...products.slice(0, 4)]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const itemsPerPage = isMobile ? 1 : 4
  const maxIndex = products.length

  const nextSlide = () => {
    setIsTransitioning(true)

    if (currentIndex >= maxIndex - 1) {
      setCurrentIndex(maxIndex)

      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 500)
    } else {
      setCurrentIndex(currentIndex + 1)
    }

    resetAutoplayTimer()
    setProgressWidth(0)
  }

  const prevSlide = () => {
    setIsTransitioning(true)

    if (currentIndex <= 0) {
      setCurrentIndex(maxIndex - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }

    resetAutoplayTimer()
    setProgressWidth(0)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
    resetAutoplayTimer()
    setProgressWidth(0)
  }

  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
    }
    startAutoplayTimer()
  }

  const startAutoplayTimer = () => {
    if (!isHovering) {
      autoplayTimerRef.current = setInterval(() => {
        setProgressWidth((prev) => {
          if (prev >= 100) {
            nextSlide()
            return 0
          }
          return prev + 0.5
        })
      }, 50)
    }
  }

  useEffect(() => {
    startAutoplayTimer()

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [isHovering, currentIndex])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setDragStartX(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const newOffset = clientX - dragStartX
    setDragOffset(newOffset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    setDragOffset(0)
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  return (
    <div className="my-16 relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={viewAllUrl}
            className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors hidden md:flex items-center"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
          <div className="flex space-x-3">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer border-gray-200 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer border-gray-200 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-xl bg-white"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 z-10">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-linear"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>

        <div
          ref={carouselRef}
          className={cn("flex", isTransitioning ? "transition-transform duration-500 ease-out" : "transition-none")}
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / itemsPerPage)}% + ${dragOffset}px))`,
          }}
          onTransitionEnd={handleTransitionEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={cn(
                "px-3 transition-transform duration-300",
                isMobile ? "w-full" : "w-1/4",
                isDragging ? "cursor-grabbing" : "cursor-grab",
              )}
            >
              <div className="transform transition-transform duration-300 hover:scale-[1.02]">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.min(5, Math.ceil(products.length / itemsPerPage)) }).map((_, index) => {
          const isActive = currentIndex === index || (currentIndex >= maxIndex && index === 0)
          const isNearActive = Math.abs(currentIndex - index) <= 1

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                  : isNearActive
                    ? "bg-gray-300 w-4"
                    : "bg-gray-200 w-2",
                "hover:bg-purple-300",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
        {Math.ceil(products.length / itemsPerPage) > 5 && (
          <span className="text-xs text-gray-400 self-center">...</span>
        )}
      </div>

      <div className="mt-4 text-center md:hidden">
        <Link
          to={viewAllUrl}
          className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center"
        >
          View All Products <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default ProductCarousel
