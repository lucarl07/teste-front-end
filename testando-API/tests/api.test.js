/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const axios = require('axios');

async function brasilApi(cityName) {
  const response = await axios.get(`https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`);

  return response.data;
}

async function spotifyWebApi(clientId, clientSecret) {
  const body = JSON.stringify({'grant_type': 'client_credentials'});

  const response = await axios.post('https://accounts.spotify.com/api/token', {
    body: new URLSearchParams({
      'grant_type': 'client_credentials'
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    json: true,
  });

  return response.data.access_token;
}

const clientId = 'bfd304367a4741cf9b8d1e3f388b0a38';
const clientSecret = '477f9e0ebb764f09b5f7c0dd2cb7810c';
console.log(spotifyWebApi(clientId, clientSecret));

// test('Verifica se a BrasilAPI retorna os dados corretamente', async () => {
//   const cityName = 'Maceió';
//   const data = await brasilApi(cityName);
//   expect(data).toBeDefined();
// });

// test('Verifica se a Spotify Web API retorna os dados corretamente', async () => {
//   const clientId = 'bfd304367a4741cf9b8d1e3f388b0a38';
//   const clientSecret = '477f9e0ebb764f09b5f7c0dd2cb7810c';
//   const data = await spotifyWebApi(clientId, clientSecret);
//   expect(data).toBeDefined();
// });
