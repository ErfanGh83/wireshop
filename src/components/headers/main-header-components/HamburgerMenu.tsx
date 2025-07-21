import React from 'react'
import { motion } from 'framer-motion'
import { HamburgerItems } from './HamburgerMenuItems'
import HamburgerMenuItemContainer from './HamburgerMenuItemContainer'
import ThemeSwitchButton from '@/components/buttons/ThemeSwitchButton'

const HamburgerMenu = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    }

    return (
        <motion.div
            className='w-56 h-full bg-blue-500 flex flex-col pt-4'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div
                className='w-full h-fit flex items-center justify-end px-4 pb-1 mb-2'
            >
                <div
                    className='size-fit'
                >
                    <ThemeSwitchButton />
                </div>
            </div>

            {HamburgerItems.map((item, index) => (
                <motion.div
                    key={item.name}
                    variants={itemVariants}
                    custom={index}
                >
                    <HamburgerMenuItemContainer
                        name={item.name}
                        link={item.link}
                        icon={item.icon}
                    />

                    <hr />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default HamburgerMenu