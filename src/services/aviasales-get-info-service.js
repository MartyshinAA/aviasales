import axios from 'axios';

let API_KEY;

export async function AviasalesGetInfo() {
  const getSearchId = await axios.get('https://aviasales-test-api.kata.academy/search');
  API_KEY = getSearchId.data.searchId;
  let allTickets = [];
  return async function recursion() {
    try {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${API_KEY}`);
      while (!response.data.stop) {
        allTickets.push(...response.data.tickets);
        return recursion(response.data.tickets);
      }
    } catch (error) {
      if (error.request.status === 404) return allTickets;
      return recursion();
    }
    return allTickets;
  };
}
