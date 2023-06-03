import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSuperheroById } from '../../redux/superheroes/superheroesOperations';
import css from './AdditionalInfoPage.module.css'; // Import the CSS module

const AdditionalInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const superhero = useSelector(state => state.superheroes.oneSuperhero);
  const isLoading = useSelector(state => state.superheroes.loading);

  useEffect(() => {
    dispatch(fetchSuperheroById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!superhero) {
    return <div>Superhero not found.</div>;
  }

  return (
    <div className={css.additionalInfoPage}>
      <Link to={`/info/${id}/update`} className={css.editButton}>
        Edit info
      </Link>
      <h2 className={css.superheroName}>{superhero.nickname}</h2>
      <p className={css.realName}>Real Name: {superhero.real_name}</p>
      <p className={css.origin}>Origin: {superhero.origin_description}</p>
      <div className={css.superpowers}>
        <h3 className={css.superpowersTitle}>Superpowers:</h3>
        <ul>
          {superhero.superpowers.map((superpower, index) => (
            <li key={index}>{superpower}</li>
          ))}
        </ul>
      </div>
      <p className={css.catchPhrase}>Catch Phrase: {superhero.catch_phrase}</p>
      <div className={css.imageCarousel}>
        {superhero.images.length > 0 ? (
          superhero.images.map((image, index) => (
            <img key={index} src={image} alt="superhero images" />
          ))
        ) : (
          <p className={css.noImages}>No images available.</p>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfoPage;
