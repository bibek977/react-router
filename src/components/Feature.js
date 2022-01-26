import React from 'react'
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom'

export default function Feature() {
    const productList = ["shoes","jacket","pants","shirt","trousers"]
    const countProduct = productList[Math.floor(Math.random()*productList.length)]
    const navigate = useNavigate()
    return (
        <div className='feature'>
            <p>Features</p>
        <br />
        <br />
        <NavLink to="/feature/product">Product</NavLink>
        <br />
        <br />
        <NavLink to="/feature/products">Products</NavLink>
        <br />
        <br />
        <NavLink to={`/feature/test`}>Test</NavLink>
        <br />
        <br />
        <NavLink to={`/feature/${countProduct}`}>{countProduct}</NavLink>
        <br />
        <br />
        <Outlet/>
        <br />
        <br />
        <button onClick={()=>{
            // navigate(-1)
            navigate('/dashboard', {state : countProduct})
        }}>Pre Load</button>

        <br />
        <br />
        <NavLink to='/dashboard' state={"Anything"} >Link</NavLink>
        </div>
        )
    }
    
    const Product= ()=>{
        return(
            <>
        {/* <h1>This is product page 1</h1> */}
        <Outlet/>
        </>
    )
}
const Products= ()=>{
    return(
        <>
        <h1>This is product page 2</h1>
        </>
    )
}
const Dashboard= ()=>{
    const location = useLocation()
    return(
        <>
        <h1>The product is {location.state} </h1>
        <h1>The product is {location.pathname} </h1>
        </>
    )
}
const ProductName= ()=>{
    const {productName} = useParams()
    return(
        <>
        <h1>you searched : {productName} </h1>
        <br />
        <br />
        <button><NavLink to="/about">price</NavLink></button>
        </>
    )
}
export {Product, Products, ProductName, Dashboard}