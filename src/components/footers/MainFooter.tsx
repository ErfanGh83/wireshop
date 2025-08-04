"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaTelegram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const MainFooter = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="w-full bg-blue-500 dark:bg-slate-700 text-white pt-12 pb-6 px-4">
            <motion.div
                className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {/* Logo & About */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <div className="flex flex-col justify-center items-center">
                        <div className='relative w-full h-fit sm:h-24 sm:flex sm:items-center sm:justify-start'>
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="object-contain invert hue-rotate-180"
                            />
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-justify">
                        ارائه بهترین کیفیت سیم و کابل صنعتی و ساختمانی با گارانتی اصالت و کیفیت کالا
                    </p>
                    <p className="text-sm leading-relaxed text-justify">
                        Providing the best quality industrial and building wires and cables with authenticity and quality guarantee
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold border-b-2 border-white pb-2">ارتباط با ما / Contact Us</h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                            <span>تهران، خیابان جمهوری، پلاک ۱۲۳<br />Tehran, Enghelab St, No. 123</span>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="mr-2" />
                            <span>۰۲۱-۱۲۳۴۵۶۷۸ / +98 21 12345678</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <span>info@wirecable.ir</span>
                        </div>
                        <div className="flex items-center">
                            <FaClock className="mr-2" />
                            <span>شنبه تا پنجشنبه ۸-۱۶ / Sat-Thu 8AM-4PM</span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold border-b-2 border-white pb-2">شبکه های اجتماعی / Social Media</h3>
                    <div className="flex flex-row gap-x-2">
                        <motion.a
                            href="#"
                            className="bg-white text-pink-500 p-2 rounded-full hover:scale-105"
                            whileHover={{ y: -3 }}
                        >
                            <FaInstagram size={20} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="bg-white text-blue-500 p-2 rounded-full hover:scale-105"
                            whileHover={{ y: -3 }}
                        >
                            <FaTelegram size={20} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="bg-white text-green-500 p-2 rounded-full hover:scale-105"
                            whileHover={{ y: -3 }}
                        >
                            <FaWhatsapp size={20} />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="bg-white text-blue-500 p-2 rounded-full hover:scale-105"
                            whileHover={{ y: -3 }}
                        >
                            <FaLinkedin size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div
                className="container mx-auto mt-8 pt-4 border-t border-white text-center text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p>© {new Date().getFullYear()} تمامی حقوق برای فروشگاه سیم و کابل محفوظ است</p>
                <p>© {new Date().getFullYear()} All Rights Reserved for Wire & Cable Shop</p>
            </motion.div>
        </footer>
    )
}

export default MainFooter