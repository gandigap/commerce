import axios from 'axios';

const getData = (type: string) => {
  let data = null;
  axios
    .get(`https://api.rawg.io/api/${type}?`, {
      params: {
        key: 'dc31c2a55aa444959f74eb7bc96b0617',
        page: 1,
        page_size: 30,
      },
    })
    .then(function (response) {
      console.log(response.data.results);
      data = response.data.results;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
};

export const getGames = () => {
  console.log('get Games');
  return getData('games');
};
