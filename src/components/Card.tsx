import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ pokemonCard, id }) => {
  const { name } = pokemonCard
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  return (
    <Link to={`/details/${id}`} className="link">
      <div className='rounded-md text-center p-4 shadow-sm mt-5 mx-auto max-w-md bg-white/40 backdrop-blur-xl'>

        <div className='text-sky-900'>
          <div className=''>
            <img
              src={image}
              alt={`Image: ${name}`}
              className='rounded-lg h-52 w-52 sm:h-72 sm:w-72 mb-8 mx-auto'
            />
          </div>
          <h1 className='font-semibold text-white bg-red-500 rounded-full py-1 my-2 w-4/5 mx-auto'>
            {' '}
            {name.toUpperCase()}{' '}
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default Card