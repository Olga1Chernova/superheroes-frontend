import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllSuperheroes } from '../../redux/superheroes/superheroesOperations';

import css from './SuperheroList.module.css';
import defaultImg from '../../images/content/unknown-superhero.jpg'

const SuperheroList = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(state => state.superheroes.superheroes.superheroes);

  useEffect(() => {
    dispatch(fetchAllSuperheroes());
  }, [dispatch]);

  const defaultImage = defaultImg;

  return (
    <ul className={css.superheroList}>
      {superheroes.map(superhero => (
        <li key={superhero._id} className={css['superhero-card']}>
          {superhero.images.length > 0 ? (
            <img
              src={superhero.images[0]}
              alt={superhero.nickname}
              className={css.superheroImage}
            />
          ) : (
            <img
              src={defaultImage}
              alt="Default"
              
            />
          )}
          <h3 className={css['superhero-nickname']}>{superhero.nickname}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SuperheroList;
