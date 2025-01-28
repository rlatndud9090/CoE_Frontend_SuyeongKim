import axios from 'axios';
import {
  GetCategoryParams,
  GetCategoryResponse,
  GetItemsParams,
  GetItemsResponse,
} from '../types/type';

export const fetchCategory = async (params: GetCategoryParams): Promise<GetCategoryResponse> => {
  const response = await axios.get('/api/faq/category', { params });

  return response.data;
};

export const fetchFAQItems = async (params: GetItemsParams): Promise<GetItemsResponse> => {
  const response = await axios.get('/api/faq', { params });

  return response.data;
};
