import { useParams } from 'react-router-dom';
import SuperheroCreateEditPage from './SuperheroCreateEditPage';

const SuperheroCreateEditContainer = () => {
  const { superheroId } = useParams();

  return (
    <div>
      <h1>{superheroId ? 'Edit Superhero' : 'Create Superhero'}</h1>
      <SuperheroCreateEditPage superheroId={superheroId} />
    </div>
  );
};

export default SuperheroCreateEditContainer;
