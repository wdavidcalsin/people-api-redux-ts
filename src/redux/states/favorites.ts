import { localStorageType, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Person[] = [];

const initialStateTest = () => {
  const localStorageData = getLocalStorage(localStorageType.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageType.FAVORITES) as string)
    : initialState;

  return localStorageData;
};

export const favoritesSlice = createSlice({
  name: 'favorites',

  initialState: initialStateTest(),

  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageType.FAVORITES, action.payload);

      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );

      setLocalStorage(localStorageType.FAVORITES, filteredState);

      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
