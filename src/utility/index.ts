import { GUARDIAN_URL, NEWS_API_URL, NEW_YORK_TIMES_URL, defaultImage } from "@/constants";
import { fetchAllNewsParamsProps, fetchNewsFromAPIProps } from "@/types/";

export const useFetch = async (
  {
    url,
    source,
    params
  }: fetchNewsFromAPIProps
): Promise<unknown> => {
  try {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    const data = await response.json();
    return { newsSource: source, data } as typeof data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return undefined
  }
};

// APIKeys should be stored in .env
export const getNewsParams = (params: fetchAllNewsParamsProps) => [
  {
    source: 'News Api',
    url: NEWS_API_URL,
    params: { apiKey: '74626c5e2487463ca2afe10a07efce04', ...params?.newApi },
  },
  {
    source: 'The Guardian News',
    url: GUARDIAN_URL,
    params: { 'api-key': '3d73218b-6148-4731-9d1b-213b029af948', ...params?.guardianNews },
  },
  {
    source: 'New York Times',
    url: NEW_YORK_TIMES_URL,
    params: { 'api-key': 'ZufERdb6s0nJksdWQvEAhfp5073Pmw1A', ...params?.newYorkTimes }
  }
];

export const getArticles = (source: string, results: any) => {
  switch (source) {
    case 'New York Times':
      return results?.results?.reduce((accumulator: any, currentValue: any) => (
        [
          ...accumulator, {
            title: currentValue?.title,
            imageUrl: currentValue?.multimedia[2]?.url,
            content: currentValue?.abstract,
            source: currentValue?.source
          }
        ]), []);

    case 'News Api':
      return results?.articles?.reduce((accumulator: any, currentValue: any) => (
        [
          ...accumulator, {
            title: currentValue?.title,
            imageUrl: currentValue?.urlToImage,
            content: currentValue?.description,
            source: currentValue?.source?.name
          }
        ]), []);

    case 'The Guardian News':
      return results?.response?.results?.reduce((accumulator: any, currentValue: any) => (
        [
          ...accumulator, {
            title: currentValue?.webTitle,
            // imageUrl: defaultImage,
            source: currentValue?.sectionName,
          }
        ]), []);
  }
}
