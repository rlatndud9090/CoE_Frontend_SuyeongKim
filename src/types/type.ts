export type GetCategoryParams = {
  tab: string;
};

export type Category = {
  categoryID: string;
  name: string;
};

export type GetCategoryResponse = {
  categoryList: Category[];
};

export type GetItemsParams = {
  limit: number;
  offset: number;
  tab: string;
  faqCategoryID?: string;
  question?: string;
};

export type FAQItem = {
  id: number;
  categoryName: string;
  subCategoryName?: string;
  question: string;
  answer: string;
};

export type FAQPageInfo = {
  totalRecord?: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
};

export type GetItemsResponse = {
  pageInfo: FAQPageInfo;
  items: FAQItem[];
};
