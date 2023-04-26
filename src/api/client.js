import axios from 'axios';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export const defaultOptions = {
  baseURL: publicRuntimeConfig?.apiUrl,
};

const client = axios.create(defaultOptions);

export default client;
