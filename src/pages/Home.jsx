import React from 'react'
import useProduct from '../hooks/Product'
import Spinner from '../components/Spinner';
import Products from "../components/Products"


const Home = () => {
  const {data,loading}=useProduct(`https://fakestoreapi.com/products`);
  // console.log("We are calling in the Home.jsx");
  // console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
       {/* {

       loading ? (<Spinner/>) :
       data.length>0 ? 
       (<div>
         data.map((date) => (<Products/> ))
       </div>):
       (<div>
        <p>No Data Found</p>
       </div>)} */}




       {


          loading ? 
          (
           <Spinner />
          ) : 
          
          data.length > 0 ? 
          (
            (
              data.map
              (
                (item) => 
                 (
                  <Products key={item.id} item={item} /> 
                )
              )
            )
          ) 
          
          : 
          (
            <div>
              <p>No Data Found</p>
            </div>
          )


        }
    </div>
  )
}

export default Home