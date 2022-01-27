import React from 'react';

export default function ItemShow({item}) {
  return (
      <>
       <div style={{display : 'grid', gridTemplateColumns : '1fr 1fr 1fr', columnGap : '1rem', margin : '1rem'}} className='footer'>
            {item.map((ele)=>{
                const {id,name,description,image,universe} = ele
                return (  
                    <div key={id}>
                    <h1 style={{color : 'tomato'}}>{name.toLocaleUpperCase()}</h1>
                    <i style={{color : 'green'}}>{universe}</i>
                     <p>{description}</p>
                     <img style={{height : "300px", width : '300px', borderRadius : '1rem', boxShadow : '10px 5px 5px' }} src={image} alt="" />
                     
                    </div>
                )
            })}
        </div>
      </>
  )
}
