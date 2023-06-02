import React from 'react';
import { useSelector } from 'react-redux';

import css from './SuperheroList.css';

const SuperheroList = () => {
  const superheroes = useSelector(state => state.superheroes.superheroes);
  const defaultImage = '';
  return (
    <ul className={css['superhero-list']}>
      {superheroes.map(superhero => (
        <li key={superhero.id} className={css['superhero-card']}>
          {superhero.images.length > 0 ? (
            <img
              src={superhero.images[0]}
              alt={superhero.nickname}
              className={css['superhero-image']}
            />
          ) : (
            <img src={defaultImage} alt="Default" className={css['superhero-image']} />
          )}
          <h3 className={css['superhero-nickname']}>{superhero.nickname}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SuperheroList;
