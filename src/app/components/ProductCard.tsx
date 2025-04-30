"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function ProductCard() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.8)]">
      <div className="relative p-4">
        <button
          className="absolute top-2 right-2 w-10 h-10 bg-[hsl(var(--primary)/0.3)] backdrop-blur-sm rounded-full flex items-center justify-center z-10 transition"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? "fill-white" : ""} text-white transition-all duration-300`}
          />
        </button>
        <div className="flex justify-center">
          <Image
            src="/images/nike-shoe.png"
            alt="Nike Running Shoe"
            width={300}
            height={250}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="bg-white dark:bg-[hsl(var(--card))] rounded-t-3xl p-5">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Nike Running Shoe</h2>

        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-300">
            EU38
          </span>
          <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-300">
            BLACK/WHITE
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Crossing hardwood comfort with off-court flair. &apos;80s-inspired construction, bold details and
          nothin&apos;-but-net style.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm uppercase">PRICE</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">$69.99</p>
          </div>
          <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
