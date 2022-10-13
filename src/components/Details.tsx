import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {
  fetchDetails,
} from "../actions/pokemon";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const currentDetails = useSelector((state) => state.pokemonState.currentDetails);

  const renderTypes = (types) => {
    return types.map((type, index) => (
      <div key={index} className="ml-2 bg-slate-200 px-2 rounded-lg">{type.type.name.toUpperCase()}</div>
    ))
  }

  const renderStats = (stats) => {
    return stats.map((stat, index) => (
      <div key={index} className="flex text-lg my-2 items-center justify-between border-b-2 font-bold rounded-xl py-2 px-8">
        <div className="text-yellow-300">{stat.stat.name.toUpperCase()}</div>
        <div className="rounded-full bg-white px-3 py-1">{stat.base_stat}</div>
      </div>
    ))
  }

  const loadDetails = (currentDetails) => {
    const {
      id,
      name,
      base_experience,
      height,
      weight,
      abilities,
      forms,
      game_indices,
      held_items,
      location_area_encounters,
      moves,
      past_types,
      sprites,
      species,
      stats,
      types,
    } = currentDetails;

    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    return (
      <div className="flex flex-col items-center w-full mt-4">
        <button onClick={() => navigate(-1)} className="self-start font-bold hover:text-gray-400">{"< Back"}</button>
        <div className="text-center w-2/3 border-8 border-yellow-300 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl px-8 py-4 mt-6">
          <div className="flex justify-between mb-4">
            <div className="bg-slate-300/75 px-4 py-2 rounded-xl text-black font-bold ml-2 text-2xl ">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div className="flex items-center font-semibold text-base">{renderTypes(types)}</div>
          </div>
          <div className="h-72 mx-auto my-4 bg-white rounded-xl">
            <img className="max-h-64 py-4 mx-auto" src={image} alt={name} />
            <div className="font-semibold">Height: {height}dm - Weight: {weight}hg</div>
          </div>
          {renderStats(stats)}
        </div>
      </div>
    );
  }

  return !currentDetails ? (
    <>
      {"Loading..."}
    </>
  ) : (
    <>{loadDetails(currentDetails)}</>
  );
};

export default Details;