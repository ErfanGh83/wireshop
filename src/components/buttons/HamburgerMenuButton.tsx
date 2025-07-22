import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

type Props = {
    hamMenuIsOpen: boolean
    setHamMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

const HamburgerMenuButton = ({ hamMenuIsOpen, setHamMenuIsOpen }: Props) => {
    const handleClick = () => {
        setHamMenuIsOpen(!hamMenuIsOpen)
    }

    return (
        <motion.button
            className="size-12 flex flex-col items-center justify-center space-y-1.5 rounded-sm bg-blue-100 hover:cursor-pointer focus:outline-none relative z-40 hover:bg-blue-200 transition-colors"
            onClick={handleClick}
            aria-label={hamMenuIsOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
        >
            {/* Top line */}
            <motion.span
                className="block h-1 w-6 bg-blue-400 rounded-full"
                initial={false}
                animate={{
                    rotate: hamMenuIsOpen ? 45 : 0,
                    y: hamMenuIsOpen ? 10 : 0,
                    width: hamMenuIsOpen ? '1.5rem' : '1.5rem'
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3
                }}
            />
            
            {/* Middle line */}
            <motion.span
                className="block h-1 w-3 bg-blue-400 rounded-full ml-1"
                initial={false}
                animate={{
                    opacity: hamMenuIsOpen ? 0 : 1,
                    width: hamMenuIsOpen ? 0 : '1rem'
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 0.2
                }}
            />
            
            {/* Bottom line */}
            <motion.span
                className="block h-1 w-6 bg-blue-400 rounded-full"
                initial={false}
                animate={{
                    rotate: hamMenuIsOpen ? -45 : 0,
                    y: hamMenuIsOpen ? -10 : 0,
                    width: hamMenuIsOpen ? '1.5rem' : '1.5rem'
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3
                }}
            />
        </motion.button>
    )
}

export default HamburgerMenuButton