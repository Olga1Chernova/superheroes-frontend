import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllSuperheroes } from '../../redux/superheroes/superheroesOperations';
import { Link } from 'react-router-dom';

import css from './SuperheroList.module.css';
import defaultImg from '../../images/content/unknown-superhero.jpg';

const SuperheroList = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(state => state.superheroes.superheroes);
  const currentPage = useSelector(state => state.superheroes.currentPage);
  const totalPages = useSelector(state => state.superheroes.totalPages);

  useEffect(() => {
    dispatch(fetchAllSuperheroes({ page: currentPage, limit: 5 }));
  }, [dispatch, currentPage]);

  const defaultImage = defaultImg;

  const handlePageChange = page => {
    dispatch(fetchAllSuperheroes({ page, limit: 5 }));
  };

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchAllSuperheroes({ page: currentPage - 1, limit: 5 }));
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchAllSuperheroes({ page: currentPage + 1, limit: 5 }));
    }
  };

  return (
    <div>
      <ul className={css.superheroList}>
        {superheroes.map(superhero => (
          <Link key={superhero._id} to={`info/${superhero._id}`}>
            <li className={css['superhero-card']}>
              {superhero.images.length > 0 ? (
                <img
                  src={superhero.images[0]}
                  alt={superhero.nickname}
                  className={css.superheroImage}
                />
              ) : (
                <img src={defaultImage} alt="Default" />
              )}
              <h3 className={css['superhero-nickname']}>
                {superhero.nickname}
              </h3>
            </li>
          </Link>
        ))}
      </ul>

      <div className={css.pagination}>
        <button
          className={`${css.arrowButton} ${
            currentPage === 1 ? css.disabled : ''
          }`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            className={currentPage === number ? css.activePage : css.page}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className={`${css.arrowButton} ${
            currentPage === totalPages ? css.disabled : ''
          }`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SuperheroList;
