// import { useState, useEffect } from 'react';

// const useProductData = (url) => {
//   const [data, setData] = useState(null); // Initialize as null
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const productCalling = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result); // Store the fetched data in state
//       } catch (error) {
//         console.error("Error fetching product data:", error.message);
//       }
//       setLoading(false);
//     };

//     if (url) productCalling(); // Only call if a valid URL is provided
//   }, [url]); // Dependency array ensures it runs when `url` changes

//   return { data, loading };
// };

// export default useProductData;



import React, { useEffect, useState } from 'react'

const useProduct = (url) => 
{
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState([]);

  useEffect
  (
   () =>
    {
      async function productCalling() 
      {
        setLoading(true);
         try 
         {
            const response = await fetch(url);
            const result = await response.json();
            setData(result); // Store the fetched data in state
            // console.log("The call is being made .Don't worry");
         } 
         catch (error) 
         {
            console.error("Error fetching product data:", error.message);
         }  

         setLoading(false);
      }


      if(url) productCalling();
    }
    ,[url])


    return { data, loading };
    
}

export default useProduct;



/*
import { useEffect, useState } from 'react';

const useProduct = (url) => 
{
      const [loading, setLoading] = useState(false);
      const [data, setData] = useState("");

      useEffect(() => {
      const productCalling = async () => 
    {
      setLoading(true);


      try 
      {
        const response = await fetch(url); // Fetch data from API
        const result = await response.json();
        setData(result); // Store the fetched data in state
        // console.log("The call is being made. Don't worry!");
      }

      catch (error) 
      {
        console.error("Error fetching product data:", error.message);
      } 
      
      finally 
      {
        setLoading(false);
      }
    };

    if (url) productCalling(); // Only call if the URL is valid
  }, []); // Dependency array ensures it runs when `url` changes

  return { data, loading };
};

export default useProduct;

*/