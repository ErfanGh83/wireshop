import React from 'react'
import SubHeaderItem from './SubHeaderItem'
import { subHeaderItems } from './SubHeaderItems'


const SubHeaderItemsContainer = () => {

    return (
        <div className="w-full h-full flex flex-row items-center gap-4 p-2 rounded-lg overflow-x-auto whitespace-nowrap">
            {subHeaderItems.map((category, index) => (
                <SubHeaderItem
                    key={index}
                    title={category.title}
                    icon={category.icon}
                    isOpen={false}
                >
                    <div></div>
                </SubHeaderItem>
            ))}
        </div>
    )
}

export default SubHeaderItemsContainer