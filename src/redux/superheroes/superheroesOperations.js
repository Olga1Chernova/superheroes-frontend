import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchAllSuperheroes = createAsyncThunk(
  'superheroes/fetchAllSuperheroes',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await instance.get('/superheroes/', {
        params: {
          page,
          limit,
        },
      });

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchSuperheroById = createAsyncThunk(
  'superheroes/fetchSuperheroById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/superheroes/info/${id}`);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSuperhero = createAsyncThunk(
  'superheroes/addSuperhero',
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post('/superheroes/create', formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSuperhero = createAsyncThunk(
  'superheroes/deleteSuperhero',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/superheroes/info/${id}/delete`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSuperhero = createAsyncThunk(
  'superheroes/updateSuperhero',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/superheroes/info/${id}/update`, formData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

