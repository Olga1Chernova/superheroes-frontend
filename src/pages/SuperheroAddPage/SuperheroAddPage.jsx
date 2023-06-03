import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSuperhero } from '../../redux/superheroes/superheroesOperations';
import css from './SuperheroAddPage.module.css';

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required('Nickname is required'),
  real_name: Yup.string().required('Real name is required'),
  origin_description: Yup.string().required('Origin description is required'),
  superpowers: Yup.string()
    .trim()
    .required('Superpowers are required')
    .test('is-array', 'Superpowers must be a comma-separated list', value => {
      if (!value) return true;
      const superpowersArray = value
        .split(',')
        .map(superpower => superpower.trim());
      return Array.isArray(superpowersArray);
    }),
  catch_phrase: Yup.string().required('Catch phrase is required'),
  images: Yup.string().url('Invalid images URL format'),
});

const SuperheroAddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      values['superpowers'] = values['superpowers'].split(',');
      values['images'] = values['images'].split(',');
      await dispatch(addSuperhero(values));

      Notiflix.Notify.success('Superhero created successfully');

      setSubmitting(false);
      resetForm();
      navigate('/');
    } catch (error) {
      Notiflix.Notify.failure(
        `Failed to create superhero due to server error ${error.message}`
      );
      setSubmitting(false);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Add Superhero</h2>
      <Formik
        initialValues={{
          nickname: '',
          real_name: '',
          origin_description: '',
          superpowers: '',
          catch_phrase: '',
          images: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          handleSubmit(values, { setSubmitting, resetForm })
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.formControl}>
              <label className={css.label} htmlFor="nickname">
                Nickname:
              </label>
              <Field
                type="text"
                id="nickname"
                name="nickname"
                className={css.input}
              />
              <ErrorMessage
                name="nickname"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formControl}>
              <label className={css.label} htmlFor="real_name">
                Real Name:
              </label>
              <Field
                type="text"
                id="real_name"
                name="real_name"
                className={css.input}
              />
              <ErrorMessage
                name="real_name"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formControl}>
              <label className={css.label} htmlFor="origin_description">
                Origin Description:
              </label>
              <Field
                type="text"
                id="origin_description"
                name="origin_description"
                className={css.input}
              />
              <ErrorMessage
                name="origin_description"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formControl}>
              <label className={css.label} htmlFor="superpowers">
                Superpowers:
              </label>
              <Field
                type="text"
                id="superpowers"
                name="superpowers"
                className={css.input}
              />
              <ErrorMessage
                name="superpowers"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formControl}>
              <label className={css.label} htmlFor="catch_phrase">
                Catch Phrase:
              </label>
              <Field
                type="text"
                id="catch_phrase"
                name="catch_phrase"
                className={css.input}
              />
              <ErrorMessage
                name="catch_phrase"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formControl}>
              <label className={css.label} htmlFor="images">
                Images:
              </label>
              <Field
                type="text"
                id="images"
                name="images"
                className={css.input}
              />
              <ErrorMessage
                name="images"
                component="div"
                className={css.error}
              />
            </div>

            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SuperheroAddPage;
