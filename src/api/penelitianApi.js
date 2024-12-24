import axios from 'axios';

const API_URL = 'http://localhost:3010/api/penelitian';

export const fetchPenelitian = () => axios.get(API_URL);
export const createPenelitian = (data) => axios.post(API_URL, data);
export const updatePenelitian = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deletePenelitian = (id) => axios.delete(`${API_URL}/${id}`);
