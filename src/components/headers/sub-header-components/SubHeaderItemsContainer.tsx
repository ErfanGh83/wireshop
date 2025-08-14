import React from 'react'
import SubHeaderItem from './SubHeaderItem'
import { subHeaderItems } from '../../../../public/api/examples'


const SubHeaderItemsContainer = () => {

    return (
        <div className="flex w-screen sm:w-fit h-20 flex-row items-center justify-around sm:justify-center sm:gap-4 sm:p-2 rounded-lg">
            {subHeaderItems.map((item, index) => (
                <SubHeaderItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
        </div>
    )
}

export default SubHeaderItemsContainer