// import React from 'react';
// // import CartItem from './CartItem';

// const Products = ({item}) => {
//   console.log(item);
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       
//        <div>
//          <p>{item.title}</p>
//        </div>


//        <div>
//          <p>{item.description}</p>
//        </div>


//        <div>
//         <img src={item.image}/> {/* This how url is being linked*/ }
//        </div>


//        <div>
//          <p>{item.proice}</p>
//        </div>


//        <button>
//         {
//            true ? <p>Remove Item</p> :<p>Add To Cart</p>
//         }

//        </button>
//     </div>
//   );
// };

// export default Products;






// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {add,remove} from "../redux/Slices/CartSlice"


// const Products = ({ item }) => {
//   const {cart}=useSelector((state)=>state);

//   const dispatch=useDispatch();

//   const addToCart=()=>{
//     dispatch(add(item)); 
//     toast.success(`${item.title} has been added to your cart!`);
//   }



//   const removeFromCart=()=>{
//     dispatch(remove(item.id));
//     toast.success(`${item.title} has been removed from  your cart!`);
//   }
//   return (
//     <div 
//     className="p-4 bg-white shadow-md rounded-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-500 ease-out hover:bg-gray-300 mt-7" >
//       {/* Image Section */}
//       <div className="flex justify-center mb-4">
//         <img 
//           src={item.image} 
//           alt={item.title} 
//           className="h-48 w-auto object-contain rounded-md"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="text-center space-y-2">
//         {/* Title */}
//         <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>

//         {/* Description */}
//         <p className="text-sm text-gray-600">
//           {item.description.length > 100 
//             ? `${item.description.slice(0, 100)}...` 
//             : item.description}
//         </p>

//         {/* Price */}
//         <p className="text-lg font-medium text-gray-900">${item.price}</p>
//       </div>

//       {/* Button Section */}
//       <div className="mt-4 flex justify-center">
//         {/* <button 
//           className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200"
//         >
//           {true ? 'Remove Item' : 'Add To Cart'}
//         </button> */}

//         {
//           cart.some((p)=>p.id===item.id) ? (<button onClick={removeFromCart}>Remove Item</button>):
//           (<button oncClick={addToCart}>
//             Add To Cart
//           </button>)
//         }
//       </div>
//     </div>
//   );
// };

// export default Products;






import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { add, remove } from "../redux/Slices/CartSlice";

const Products = ({ item }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success(`${item.title} has been added to your cart!`);
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success(`${item.title} has been removed from your cart!`);
  };

  return (
    <div 
      className="p-4 bg-white shadow-md rounded-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-500 ease-out hover:bg-gray-300 mt-7"
    >
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img 
          src={item.image} 
          alt={item.title || "Product Image"} 
          className="h-48 w-auto object-contain rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="text-center space-y-2">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{item.title || "No Title"}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {item.description 
            ? (item.description.length > 100 
                ? `${item.description.slice(0, 100)}...` 
                : item.description) 
            : "No description available"}
        </p>

        {/* Price */}
        <p className="text-lg font-medium text-gray-900">${item.price || "N/A"}</p>
      </div>

      {/* Button Section */}
      <div className="mt-4 flex justify-center">
        {cart.some((p) => p.id === item.id) ? (
          <button 
            onClick={removeFromCart}
            className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition duration-200"
          >
            Remove Item
          </button>
        ) : (
          <button 
            onClick={addToCart} 
            className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition duration-200"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
