import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const MainFooter = () => {
  const phoneMobile = ['۰۹۱۲۶۳۴۶۵۷۵', '۰۹۰۲۱۹۹۱۳۹۵'];
  const phoneLandline = [
    '۰۲۱۳۶۴۱۹۸۱۶',
    '۰۲۱۳۴۹۱۶۸۳۰',
    '۰۲۱۳۳۹۹۰۵۳۷',
    '۰۲۱۳۳۹۹۰۵۳۸',
  ];
  const email = 'lk.electroelka@gmail.com';
  const address =
    'تهران، لاله‌زار جنوبی، نبش کوچه مجمر، پاساژ فراز لاله‌زار، طبقه منفی۱، پلاک۳۸';

  return (
    <footer className="w-full bg-blue-500 dark:bg-slate-700 text-white pt-12 pb-6 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full h-fit sm:h-24 sm:flex sm:items-center sm:justify-start">
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
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="w-full text-center text-xl font-bold border-b-2 border-white pb-2">
            ارتباط با ما
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
              <span>{address}</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>
                {phoneMobile.join(' / ')} <br /> {phoneLandline.join(' / ')}
              </span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>{email}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>شنبه تا پنجشنبه ۸-۱۶</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="w-full text-center text-xl font-bold border-b-2 border-white pb-2">
            شبکه های اجتماعی
          </h3>
          <div className="flex flex-row justify-center gap-x-2">
            <Link
              href="https://www.instagram.com/electro.elka"
              className="bg-white text-pink-500 p-2 rounded-full hover:scale-105"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://t.me/Electroelka"
              className="bg-white text-blue-500 p-2 rounded-full hover:scale-105"
            >
              <FaTelegram size={20} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=989021991395&text="
              className="bg-white text-green-500 p-2 rounded-full hover:scale-105"
            >
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 pt-4 border-t border-white text-center text-sm">
        <p>
          © {new Date().getFullYear()} تمامی حقوق برای فروشگاه سیم و کابل محفوظ
          است
        </p>
        <p>
          © {new Date().getFullYear()} All Rights Reserved for Wire & Cable Shop
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
