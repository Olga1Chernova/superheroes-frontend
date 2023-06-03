import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  fetchSuperheroById,
  deleteSuperhero,
} from '../../redux/superheroes/superheroesOperations';
import css from './AdditionalInfoPage.module.css';

const AdditionalInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate to navigate after deletion
  const superhero = useSelector(state => state.superheroes.oneSuperhero);
  const isLoading = useSelector(state => state.superheroes.loading);

  useEffect(() => {
    dispatch(fetchSuperheroById(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteSuperhero(id));
      navigate('/'); // Navigate to the homepage after successful deletion
    } catch (error) {
      console.error('Error deleting superhero:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!superhero) {
    return <div>Superhero not found.</div>;
  }

  return (
    <div className={css.additionalInfoPage}>
      <Link to={`/info/${id}/update`} className={css.editAndDeleteButtons}>
        Edit info
      </Link>
      <button onClick={handleDelete} className={css.editAndDeleteButtons}>
        Delete superhero
      </button>
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
