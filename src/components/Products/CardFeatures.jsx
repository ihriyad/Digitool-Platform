import { Check } from 'lucide-react';
import React from 'react';

const CardFeatures = ({features}) => {
    return (
        <ul>
  {features.map((f, i) => (
    <li className='flex items-center' key={i}>
        <Check className='text-green-500 font-bold'></Check>
         {f}</li>
  ))}
</ul>
    );
};

export default CardFeatures;