import React, { useState } from 'react';


export const useCounter = (initialValue) => {
   const [value, setValue] = useState(initialValue);
   const increaseValueCount = () => {
     setValue(value + 1);
   };
   return [value, setValue, increaseValueCount];
 };