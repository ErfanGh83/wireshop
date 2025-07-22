import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  title: string
  link?: string
  icon: ReactNode
  className?: string
}

const SubHeaderItem = ({
  title,
  link,
  icon,
  className = ''
}: Props) => {
  const content = (
    <>
      <span className="text-xs md:text-sm font-medium">{title}</span>
      <span className="text-xs ml-2">{icon}</span>
    </>
  )

  return (
    <button className={`w-fit h-8 rounded-full flex items-center justify-between pl-1 pr-2 py-[1px] md:pl-2 md:pr-4 md:py-1 cursor-pointer bg-blue-100 dark:bg-slate-500 dark:text-gray-100 hover:bg-blue-200 transition-colors  ${className}`}>
      {link ? (
        <Link
          href={link}
          className="flex items-center gap-2 w-full"
          aria-label={title}
        >
          {content}
        </Link>
      ) : (
        <div className="flex items-center gap-2 w-full">
          {content}
        </div>
      )}
    </button>
  )
}

export default SubHeaderItem