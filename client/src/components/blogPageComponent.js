import React from 'react'
import blog1 from '../assests/BlogPage/Blog1.png';
import IconReadingTime from '../assests/IconReadingTime.png'
import IshitaChhakra from '../assests/IshitaChhakra.png'

import './stylesBlogPage.css'

function BlogPageComponent({ 
    backgroundImage,
    category,
    title,
    content,
    date,
    readingTime,
    authorImage,
    authorName,
    authorRole
}) {
    return (
        <div className='w-11/12 mx-auto bg-white mb-8 rounded-xl overflow-hidden  transition duration-300 hoverEffects'>
            <div className='min-h-40 w-full flex gap-10'>
                <div className='w-1/2 bg-red-600 rounded-l-xl' style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '360px'
                }}>
                </div>
                <div className='w-1/2 pt-2 relative'>
                    <p className='mt-2 rounded-full inline-block bg-gray-200 drop-shadow-2xl px-5 py-1 text-sm text-slate-900'>{category}</p>
                    <h1 className='text-customBlack text-4xl font-bold mt-4 pr-8'>{title}</h1>
                    <p className='mt-6 text-base pr-8'>{content}</p>
                    
                    <div className='flex mt-6 font-semibold text-sm gap-6' style={{color: '#7C7C7C'}}>
                        <div>{date}</div>
                        <div className='flex gap-1'>
                            <img src={IconReadingTime} alt="Just an icon" />
                            <div>{readingTime}</div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className='flex gap-3 items-center mb-3 '>
                            <img src={authorImage} alt="Author" className='w-12'/>
                            <div className='font-semibold'>
                                <div className='font-bold'>{authorName}</div>
                                <div className='-mt-1' style={{color: '#7C7C7C'}}>{authorRole}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPageComponent;
