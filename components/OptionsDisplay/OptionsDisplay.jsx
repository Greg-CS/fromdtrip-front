import React from 'react'

export const OptionsDisplay = ({ category }) => {
    console.log("categories: " + category)
    return (
    <td>
        <span>
            {"categories: " + category}
        </span>
        {/* {filteredCategories.map((cat) => (
            <td key={cat._id}>
                <ul className='grid grid-cols-2 gap-5'>
                    {cat.properties.map((options) => {
                    return (
                        <li key={options._id}>
                            <p className='text-sm'>{options.name}</p>
                            <div>
                            <select className='bg-white border-2 p-1 rounded-lg border-black'>
                            {options.values.map((values) => {
                            return (
                            <option key={values._id}>
                            {values}
                            </option>
                            )
                            })}
                            </select>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </td>
        ))} */}
    </td>
  )
}
