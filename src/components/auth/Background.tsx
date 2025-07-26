import React from 'react'
import Image from 'next/image'

type Props = {
    backgroundImage: string
}

const Background = ({ backgroundImage }: Props) => {
    return (
        <div className='w-screen h-screen fixed -z-10 top-0 left-0'>
            <Image
                src={backgroundImage}
                alt="Authentication Background"
                fill
                className="object-cover"
                priority
            />
        </div>
    )
}

export default Background