import React ,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatesCollection = () => {

    const { products} = useContext(ShopContext);
    const [latestProducs,setLatesProducts] = useState([]);

    useEffect(()=>{
        setLatesProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Pickleball Gear Store - Phụ Kiện Pickleball
        </p>
      </div>

      {/*Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-rows-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducs.map((item,index)=>(
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
            
          ))
        }
      </div>
    
    </div>
  )
}

export default LatesCollection