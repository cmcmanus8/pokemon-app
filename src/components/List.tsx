import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Card from './Card'
import {
  fetchPokemon,
} from '../actions/pokemon';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(151))
  }, [dispatch])

  const pokemonList = useSelector((state) => state.pokemonState.pokemonList)

  console.log(pokemonList)

  return !pokemonList.results ? (
    <>
      {"Loading..."}
    </>
  ) : (
    <div className='flex flex-col items-center w-full'>
      <div className='flex justify-center'>
        <img src='/images/pokemon-logo.png' alt='pokemon-logo' className='w-1/2' />
      </div>
      <div className='text-center'>
        <h4>A simple front end for PokeAPI for the 151 from the original generation!</h4>
      </div>
      <div className='flex flex-wrap justify-evenly mt-6'>
        {pokemonList.results.map((pokemonCard: any, index: any) => (
          <Card key={index} id={index+1} pokemonCard={pokemonCard} />
        ))}
      </div>
    </div>
  );
}

export default List