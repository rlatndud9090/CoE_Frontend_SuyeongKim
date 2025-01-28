import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from '../utils/api';
import { MENU_ID_LIST } from '../constants/constants';

const useFetchCategory = (selectedMenuIndex: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['category', MENU_ID_LIST[selectedMenuIndex]],
    queryFn: () => fetchCategory({ tab: MENU_ID_LIST[selectedMenuIndex] }),
  });

  return {
    categoryData: data,
    isCategoryLoading: isLoading,
    isCategoryError: isError,
  };
};

export default useFetchCategory;
