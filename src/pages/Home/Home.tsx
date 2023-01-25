import { People } from '@/data';
import { addPeople } from '@/redux/states/people';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components/PeopleTable';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
