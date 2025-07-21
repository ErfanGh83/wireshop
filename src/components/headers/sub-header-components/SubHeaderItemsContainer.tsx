import React from 'react'
import SubHeaderItem from './SubHeaderItem'
import { subHeaderItems } from '../../../../public/api/examples'


const SubHeaderItemsContainer = () => {

    return (
        <div className="w-full h-full flex flex-row items-center gap-4 p-2 rounded-lg overflow-x-auto whitespace-nowrap">
            {subHeaderItems.map((category, index) => (
                <SubHeaderItem
                    key={index}
                    title={category.title}
                    icon={category.icon}               
                />
            ))}
        </div>
    )
}

export default SubHeaderItemsContainer