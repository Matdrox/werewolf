import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (num) => {
    setSelectedButton(num);
  };

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
      <p className='text-center text-4xl p-5 text-zinc-600'>
        SELECT NUMBER OF PLAYERS
      </p>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-6'>
        {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
          <motion.button
            key={num}
            type='button'
            className={`col-span-1 w-24 h-24 text-4xl rounded-md shadow-lg text-white font-bold ${
              num === selectedButton
							? 'bg-orange-500 shadow-orange-300'
							: 'bg-purple-600 shadow-purple-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1, transition: { duration: 0.03 } }}
            transition={{ duration: 0.1 }}
						animate={{backgroundColor: num === selectedButton ? 'rgb(249 115 22)' : 'rgb(147 51 234)'}}
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
