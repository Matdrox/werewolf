import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (num) => {
    setSelectedButton(num);
  };

  return (
    <div>
      <p className='text-center text-4xl p-5 font-bold text-zinc-400'>
        SELECT NUMBER OF PLAYERS
      </p>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-6'>
        {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
          <motion.button
            key={num}
            type='button'
            className={`col-span-1 w-24 h-24 text-4xl rounded-md shadow-lg text-white font-bold ${
              num === selectedButton
                ? 'bg-orange-500 shadow-orange-500/80'
                : 'bg-purple-600 shadow-purple-600/80'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1, transition: { duration: 0.03 } }}
            transition={{ duration: 0.1 }}
            animate={{
              backgroundColor:
                num === selectedButton ? 'rgb(249 115 22)' : 'rgb(147 51 234)',
            }}
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </motion.button>
        ))}
      </div>

      <div className='flex justify-center'>
        <motion.button
          className='w-96 h-20 m-10 bg-purple-600 shadow-lg shadow-purple-400 rounded-md transition-shadow'
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgb(249 115 22)',
            boxShadow:
              '0 10px 15px -3px rgb(249 115 22 / 0.8), 0 4px 6px -4px rgb(249 115 22 / 0.8)',
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <p className='text-white text-4xl font-bold'>GET ROLES</p>
        </motion.button>
      </div>
    </div>
  );
};

export default Menu;
