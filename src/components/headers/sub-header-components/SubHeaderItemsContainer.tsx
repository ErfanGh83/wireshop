import React from 'react'
import SubHeaderItem from './SubHeaderItem'
import { subHeaderItems } from '../../../../public/api/examples'


const SubHeaderItemsContainer = () => {

    return (
        <div className="hidden sm:flex w-fit h-full flex-row items-center jutify-center gap-4 p-2 rounded-lg">
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