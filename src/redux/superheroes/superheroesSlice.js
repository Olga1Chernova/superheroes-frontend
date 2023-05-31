import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllSuperheroes,
  fetchSuperheroById,
  addSuperhero,
  deleteSuperhero,
  updateSuperhero,
} from './superheroesOperations';

export const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState: {
    superheroes: [],
    oneSuperhero: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllSuperheroes.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAllSuperheroes.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.superheroes = payload;
      })
      .addCase(fetchAllSuperheroes.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
      

      .addCase(fetchSuperheroById.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchSuperheroById.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.oneSuperhero = payload;
      })
      .addCase(fetchSuperheroById.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
  
  
      .addCase(addSuperhero.pending, (store) => {
        store.loading = true;
      })
      .addCase(addSuperhero.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.superheroes.push(payload);
      })
      .addCase(fetchSuperheroById.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
  
  
      .addCase(deleteSuperhero.pending, (store) => {
        store.loading = true;
      })
      .addCase(deleteSuperhero.fulfilled, (store, {payload}) => {
        store.loading = false;
        const index = store.superheroes.findIndex(
          (superhero) => superhero.id === payload
        );
        if (index !== -1) {
          store.superheroes.splice(index, 1);
        }
      })
      .addCase(deleteSuperhero.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
  
  
      .addCase(updateSuperhero.pending, (store) => {
        store.loading = true;
      })
      .addCase(updateSuperhero.fulfilled, (store, {payload}) => {
        const index = store.superheroes.findIndex(
          (superhero) => superhero.id === payload.id
        );
        if (index !== -1) {
          store.superheroes[index] = payload;
        }
      })
      .addCase(updateSuperhero.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
});

export const superheroesSliceReducer = superheroesSlice.reducer;
