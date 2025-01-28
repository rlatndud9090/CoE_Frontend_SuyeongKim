import { http, HttpResponse } from 'msw';
import data from './data.json';

type Category = {
  categoryID: string;
  name: string;
};

type GetCategoryResponseBody = {
  categoryList: Category[];
};

type FAQItem = {
  id: number;
  categoryName: string;
  subCategoryName?: string;
  question: string;
  answer: string;
};

type GetItemsResponseBody = {
  pageInfo: {
    totalRecord?: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: FAQItem[];
};

export const handlers = [
  // 카테고리 목록 조회 API
  http.get<never, never, GetCategoryResponseBody>('/api/faq/category', async ({ request }) => {
    const url = new URL(request.url);

    const tab = url.searchParams.get('tab');

    if (tab === 'CONSULT') {
      return HttpResponse.json({
        categoryList: data.consult.category,
      });
    } else if (tab === 'USAGE') {
      return HttpResponse.json({
        categoryList: data.usage.category,
      });
    } else {
      throw new Error('bad params');
    }
  }),

  // 질문 목록 조회 API
  http.get<never, never, GetItemsResponseBody>('/api/faq', async ({ request }) => {
    const url = new URL(request.url);

    const searchParams = Object.fromEntries(url.searchParams);
    const { limit, offset, tab, faqCategoryID, question } = searchParams;

    if (tab !== 'CONSULT' && tab !== 'USAGE') {
      throw new Error('bad params');
    }

    const limitValue = parseInt(limit, 10);
    const offsetValue = parseInt(offset, 10);

    const categoryList = tab === 'CONSULT' ? data.consult.category : data.usage.category;
    let itemList = tab === 'CONSULT' ? data.consult.items : data.usage.items;

    if (faqCategoryID) {
      const categoryName = categoryList.find(
        (category) => category.categoryID === faqCategoryID
      )?.name;

      if (tab === 'CONSULT') {
        itemList = itemList.filter((item) => item.subCategoryName === categoryName);
      } else {
        itemList = itemList.filter((item) => item.categoryName === categoryName);
      }
    }

    if (question) {
      itemList = itemList.filter((item) => {
        if (item.categoryName.includes(question)) return true;
        if (item.subCategoryName.includes(question)) return true;
        if (item.question.includes(question)) return true;
        if (item.answer.includes(question)) return true;

        return false;
      });
    }

    return HttpResponse.json({
      pageInfo: {
        totalRecord: itemList.length,
        offset: offsetValue,
        limit: limitValue,
        prevOffset: offsetValue - limitValue > 0 ? offsetValue - limitValue : 0,
        nextOffset:
          offsetValue + limitValue < itemList.length ? offsetValue + limitValue : offsetValue,
      },
      items: itemList.slice(offsetValue, offsetValue + limitValue),
    });
  }),
];
