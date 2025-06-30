import React from 'react'

function Title({ title }) {
    return (

        <div className="bg-[#9a6023]  py-v2 px-4 text-white text-center w-fit skew-right mt-8 mb-4">
            <h2 className="text-2xl font-thin uppercase tracking-wide pr-4 py-2">{title}</h2>
            <div className='w-full h-2 bg-[#d1955d] my-2 skew-rights' />
        </div>
    )
}

export default Title