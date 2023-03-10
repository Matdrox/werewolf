import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div
      className='bg-white w-1/4 h-3/4 rounded-lg'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
	  transition={{duration: .15}}
    >
      <div className='text-black'>Card</div>
    </motion.div>
  );
};

export default Card;
