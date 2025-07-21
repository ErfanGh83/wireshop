import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  title: string
  link?: string
  icon: ReactNode
  children: ReactNode
  isOpen: boolean
  className?: string
}

const SubHeaderItem = ({
  title,
  link,
  icon,
  children,
  isOpen,
  className = ''
}: Props) => {
  const content = (
    <>
      <span className="text-sm font-medium">{title}</span>
      <span className="ml-2">{icon}</span>
    </>
  )

  return (
    <button className={`w-fit h-8 rounded-full flex items-center justify-between pl-2 pr-4 py-1 cursor-pointer bg-blue-100 hover:bg-blue-200 transition-colors  ${className}`}>
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
          {isOpen && children}
        </div>
      )}
    </button>
  )
}

export default SubHeaderItem