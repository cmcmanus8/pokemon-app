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
      <div className="pokemon-details">
        <button onClick={() => navigate(-1)}>Go back</button>
        <img className="pokemon-details-image" src={image} alt={name} />
        <ul className="details-wrapper">
          <li className="name">{name}</li>
          <li className="details">
            {base_experience}
          </li>
          <li className="height">{height}</li>
          <li className="weight">{weight}</li>
        </ul>
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