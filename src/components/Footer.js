import React, { useState } from 'react'
import items from './Items'
import ItemShow from './ItemShow'

const buttonName = [ 'All' , ...new Set(items.map((ele)=>ele.universe))]

export default function Footer() {
    const [item, setitem] = useState(items)
    const [itemButton, setitemButton] = useState(buttonName)

 
    const filterData = (universes)=>{
        if(universes==="All"){
            setitem(items)
        }
        else{

            const filtering = items.filter((ele)=>{
                return ele.universe === universes
            })
            setitem(filtering)
        }
    }



    return (

    <>

    <div style={{display : 'flex', flexDirection : 'row', margin : '4rem', justifyContent : 'space-around'}}>

        {itemButton.map((e,i)=>{
            return (

                <button style={{width : '10rem', height : '2rem', fontSize : '1.5rem', borderRadius : '1rem', curser : 'pointer'}} key={i} onClick={()=>filterData(e)}>{e}</button>
            )
        })}
        
   </div>
       
    <ItemShow item={item} />

    </>
    )
}
