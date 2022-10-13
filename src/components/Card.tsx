import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ pokemonCard, id }) => {
  const { name } = pokemonCard
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  return (
    <Link to={`/details/${id}`} className="group rounded-lg px-2 my-2 transition duration-300 ease-out hover:ease-in hover:scale-125 hover:shadow-xl hover:bg-slate-300">
      <div className='text-sky-900'>
        <div className=''>
          <img
            src={image}
            alt={`Image: ${name}`}
            className='rounded-lg h-24 w-24 my-3 mx-auto'
          />
        </div>
        <div className='font-medium text-sm text-center text-sky-700 group-hover:text-black rounded-full py-1 mt-2 w-4/5 mx-auto'>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
      </div>
    </Link>
  )
}

export default Card