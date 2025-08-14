"use client";

import React, { JSX, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { checkAdmin } from "@/lib/api/adminApi";
import Spinner from "../spinner/Spinner";

interface TabProps {
  title: string;
  component: JSX.Element;
}


export default function Tab({ contains }: { contains: TabProps[] }) {
  const [tab, setTab] = useState(contains[0].title);
  const [isAdmin, setIsAdmin] = useState<null | boolean>(null)
  const animationId = useId();

  useEffect(() => {
    checkAdmin().then(() => setIsAdmin(true)).catch(() => setIsAdmin(false))
  }, [])

  if (isAdmin === false) return (
    <div className="w-full text-red-500">
      <h2 className="text-center text-xl">لطفا با دسترسی ادمین دوباره وارد شوید.</h2>
    </div>
  );

  if(isAdmin === null) return <Spinner size={48} />

  return (
    <div className="my-5 overflow-x-hidden h-full">
      <div className="space-y-2 overflow-hidden">
        {/* menu items */}
        <div className="text-md md:text-lg flex w-full items-center justify-center gap-1 md:gap-4 lg:gap-8 space-x-4 overflow-x-auto border-b-2 pb-4 dark:border-purple-500 border-blue-300">
          {contains.map((item) => (
            <button
              key={item.title}
              className="relative"
              onClick={() => setTab(item.title)}
            >
              <AnimatePresence>
                {tab === item.title && (
                  <motion.div
                    layoutId={animationId}
                    className="rounded absolute inset-0 size-full bg-blue-100 dark:bg-slate-500  backdrop-blur"
                  />
                )}
              </AnimatePresence>
              <div className="relative z-[1] flex items-center space-x-2 px-3 py-1 font-light dark:text-purple-100 cursor-pointer uppercase">
                {/* <item.icon className="h-4 w-auto" /> */}
                <span>{item.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="px-1 md:px-4 py-5 overflow-auto">
          {contains.map((item, idx) => (
            <AnimatePresence key={idx} mode="popLayout">
              {item.title === tab && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.25,
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="w-full overflow-y-auto"
                >
                  {item.component}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
