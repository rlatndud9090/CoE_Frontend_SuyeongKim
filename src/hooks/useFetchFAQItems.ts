import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFAQItems } from '../utils/api';
import { FETCH_LIMIT, MENU_ID_LIST } from '../constants/constants';

const useFetchFAQItems = (selectedMenuIndex: number, faqCategoryID?: string) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['faqItems', MENU_ID_LIST[selectedMenuIndex], faqCategoryID],
    queryFn: ({ pageParam }) =>
      fetchFAQItems({
        offset: pageParam,
        limit: FETCH_LIMIT,
        tab: MENU_ID_LIST[selectedMenuIndex],
        faqCategoryID,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { offset, nextOffset } = lastPage.pageInfo;
      if (offset === nextOffset) return undefined;

      return nextOffset;
    },
  });

  return {
    faqItemsData: data,
    isFAQItemsLoading: isLoading,
    isFAQItemsError: isError,
    fetchNextPage,
    hasNextPage,
  };
};

export default useFetchFAQItems;
