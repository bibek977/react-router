import React from 'react'

export default function Blog() {
    const array = ["a","b","c"]
    const value = array.filter((e,i,a)=>a.indexOf(e)===i)
    const arr = new Set(['1','2','3','4'])
    // console.log(value);
    // console.log(arr);
    return (
        <>
        {/* // <div style={{display : 'flex', justifyContent : "center", alignItems : 'center', flexDirection : 'column', height : '50vw', columnGap : '1rem' }} className='blog'> */}
            <p>Blog</p>
            <h1>{value}</h1>
            <h2>{arr}</h2>
            <img style={{height : "300px", width : '300px', borderRadius : '1rem' }} src="images/spiderman.jpeg" alt="" />
        {/* // </div> */}
        </>
    )
}
