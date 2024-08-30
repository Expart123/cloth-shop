import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import Item from '../items/item';

const NewCollections = () => {

  const [new_collection, setNew_collection]= useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/newcollections')
    .then((response)=>response.json())
    .then((data)=>
    setNew_collection(data))
  },[])

  if (new_collection.length === 0) {
    return <div>Loading New Collections...</div>;
  }

  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => (
          <Item 
            key={i} 
            id={item?.id} 
            name={item?.name} 
            image={item?.image} 
            new_price={item?.new_price} 
            old_price={item?.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

