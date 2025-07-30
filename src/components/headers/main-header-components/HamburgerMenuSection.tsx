"use client"

import HamburgerMenuButton from '@/components/buttons/HamburgerMenuButton'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'

const HamburgerMenuSection = () => {
    const [hamMenuIsOpen, setHamMenuIsOpen] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setHamMenuIsOpen(false)
        }
    }

    return (
        <div className="min-w-[20%] flex-1 h-full bg-transparent flex items-center justify-center">
            <HamburgerMenuButton
                hamMenuIsOpen={hamMenuIsOpen}
                setHamMenuIsOpen={setHamMenuIsOpen}
            />

            <AnimatePresence>
                {hamMenuIsOpen && (
                    <>
                        <motion.div
                            className="w-screen h-screen fixed top-0 left-0 z-40 bg-opacity-50"
                            onClick={handleClick}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeInOut" }}
                        >
                            <HamburgerMenu />
                        </motion.div>

                        <motion.div
                            className="w-screen h-screen fixed top-0 left-0 z-30 bg-black/20"
                            onClick={handleClick}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "tween", ease: "easeInOut" }}
                        >
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HamburgerMenuSection