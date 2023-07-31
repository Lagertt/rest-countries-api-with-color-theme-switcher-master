import axios from 'axios';

export default class CountriesService {
  static async getAll() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getByRegion(region) {
    if (region) {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/region/${region.toLowerCase()}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  static async getByName(name) {
    if (name) {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
}
