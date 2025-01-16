// import React from 'react'
// import {FcDeleteDatabase} from 'react-icons/fc';
// import { useDispatch } from 'react-redux';
// import { remove } from '../redux/Slices/CartSlice';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartItem = ({item,itemIndex}) => {
//   const dispatch=useDispatch();
//   const removeFromCart=() =>
//   {
//     dispatch(remove(item.id));
//     toast.success(`${item.title} has been removed from  your cart!`);

//   }



//   return (
//     <div>
       
//        <div>
          
//            <div>
//               <img src={item.image}/>
//            </div>


//           <div>
//             <h1>{item.title}</h1>

//             <h1>
//               {item.description}
//             </h1>


//             <div>
//               <p>{item.price}</p>
//               <div onClick={removeFromCart}>
//                 <FcDeleteDatabase/>
//               </div>
//             </div>




//           </div>





//        </div>
//     </div>
//   )
// }

// export default CartItem






import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success(`${item.title} has been removed from your cart!`);
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 gap-4 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-24 h-24 object-contain rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow space-y-2">
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h1>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {item.description || 'No description available'}
        </p>

        {/* Price and Delete Section */}
        <div className="flex justify-between items-center mt-2">
          {/* Price */}
          <p className="text-lg font-medium text-gray-900">${item.price}</p>

          {/* Delete Icon */}
          <div 
            onClick={removeFromCart} 
            className="cursor-pointer text-red-500 hover:text-red-700"
          >
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
