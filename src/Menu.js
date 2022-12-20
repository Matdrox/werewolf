import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    // <div>
    //   <div className='flex-row'>
    //     <p className='text-center text-2xl p-5'>NUMBER OF PLAYERS</p>
    //     <div className='rounded-md shadow-sm'>
    //       <input
    //         type='text'
    //         className='form-input py-4 px-4 block w-full leading-5 text-center rounded-md sm:text-sm sm:leading-5'
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
      <p className='text-center text-4xl p-5 text-zinc-400'>SELECT NUMBER OF PLAYERS</p>
      <div className='grid grid-cols-6 gap-4'>
        {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((number) => (
          <motion.button
            key={number}
            type='button'
            className='col-span-1 w-24 h-24 text-4xl rounded-md bg-purple-600 shadow-lg shadow-purple-400 text-white font-bold'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1, transition: {duration: 0.03} }}
			transition={{duration: 0.1}}
          >
            {number}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
