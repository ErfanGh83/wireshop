"use client"

import { useEffect, useState, TouchEvent } from "react"
import { bigProducts } from "../../../public/api/examples"
import BigProductContainer from "./BigProductContainer"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = bigProducts.slice(0, 4)
const MIN_SWIPE_DISTANCE = 50

const BigProductsContainer = () => {
    const [active, setActive] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    useEffect(() => {
        if (products.length <= 1) return
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % products.length)
        }, 3200)
        return () => clearInterval(interval)
    }, [])

    const onTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
        setTouchEnd(null)
    }

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return
        const distance = touchStart - touchEnd

        if (distance > MIN_SWIPE_DISTANCE) {
            setActive((prev) => (prev + 1) % products.length)
        } else if (distance < -MIN_SWIPE_DISTANCE) {
            setActive((prev) => (prev - 1 + products.length) % products.length)
        }
    }

    const getStyle = (index: number) => {
        // tighter spacing on mobile
        const offset =
            typeof window !== "undefined" && window.innerWidth < 640
                ? 70
                : 100

        if (index === active) {
            return {
                transform: "translateX(-50%) scale(1)",
                opacity: 1,
                zIndex: 20,
            }
        }

        if (index === (active + 1) % products.length) {
            return {
                transform: `translateX(calc(-50% + ${offset}px)) scale(0.95)`,
                opacity: 0.7,
                zIndex: 10,
            }
        }

        if (index === (active - 1 + products.length) % products.length) {
            return {
                transform: `translateX(calc(-50% - ${offset}px)) scale(0.95)`,
                opacity: 0.7,
                zIndex: 10,
            }
        }

        return {
            transform: "translateX(-50%) scale(0.9)",
            opacity: 0,
            pointerEvents: "none" as const,
        }
    }

    return (
        <>
            <div className="text-center mb-4 mt-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    کالاهای محبوب
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    پرفروش‌ترین و پرطرفدارترین محصولات انتخاب‌شده توسط مشتریان
                </p>
            </div>
            <div className="w-full px-4 flex justify-center" dir="rtl">
                <div
                    className="
                    relative w-full max-w-[600px]
                    rounded-2xl bg-white dark:bg-slate-800
                    border border-gray-200 dark:border-slate-700
                    shadow-sm px-4 py-5
                    overflow-visible
                "
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Carousel */}
                    <div className="relative h-[160px] sm:h-[190px] flex items-center justify-center">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                style={getStyle(index)}
                                className="
                                absolute left-1/2
                                transition-all duration-500 ease-in-out
                            "
                            >
                                <Link href={product.link}>
                                    <BigProductContainer
                                        title={product.title}
                                        imageUrl={product.imageUrl}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Arrows (restored UI) */}
                    {products.length > 1 && (
                        <>
                            <button
                                onClick={() =>
                                    setActive((p) => (p - 1 + products.length) % products.length)
                                }
                                className="
                                absolute left-2 top-1/2 -translate-y-1/2
                                w-9 h-9 rounded-full bg-white/80
                                flex items-center justify-center
                                shadow hover:scale-110 transition z-30
                            "
                            >
                                <ChevronLeft className="w-4 h-4 text-gray-600" />
                            </button>

                            <button
                                onClick={() =>
                                    setActive((p) => (p + 1) % products.length)
                                }
                                className="
                                absolute right-2 top-1/2 -translate-y-1/2
                                w-9 h-9 rounded-full bg-white/80
                                flex items-center justify-center
                                shadow hover:scale-110 transition z-30
                            "
                            >
                                <ChevronRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </>
                    )}

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-3">
                        {products.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActive(idx)}
                                className={`h-2 rounded-full transition-all duration-300
                                ${active === idx ? "w-5 bg-gray-500" : "w-2 bg-gray-300"}
                            `}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigProductsContainer