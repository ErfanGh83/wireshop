"use client"

import ShoppingCartButton from '@/components/buttons/ShoppingCartButton'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import ShoppingCartModule from './ShoppingCartModule'

const ShoppingCartSection = () => {
    const [cartModuleIsOpen, setCartModuleIsOpen] = useState(false)

    return (
        <div className='relative size-fit'>
            <ShoppingCartButton setModuleIsOpen={setCartModuleIsOpen} itemCount={0}/>
            {
                cartModuleIsOpen && (
                    <AnimatePresence>
                        <motion.div
                            key="address-modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className=" fixed sm:absolute top-0 left-0 sm:top-[100%] sm:left-0 z-[51] sm:z-50 flex items-center justify-center"
                        >
                            <motion.div
                                key="address-modal-content"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            >
                                <ShoppingCartModule setModuleIsOpen={setCartModuleIsOpen} moduleIsOpen={cartModuleIsOpen} />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div>
    )
}

export default ShoppingCartSection