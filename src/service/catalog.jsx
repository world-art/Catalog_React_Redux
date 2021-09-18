import API from './ApiService';

export const getItemsService = async () => {
  const data = await API.get('dev/task1/catalog');
  return data;
};