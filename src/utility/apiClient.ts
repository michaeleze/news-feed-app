import { GUARDIAN_URL, NEWS_API_URL, NEW_YORK_TIMES_URL } from "@/constants";
import { fetchAllNewsParamsProps, fetchNewsFromAPIProps } from "@/types/";

export const fetchNewsFromAPI = async (
  {
    url,
    source,
    params
  } : fetchNewsFromAPIProps
  ): Promise<unknown> => {
  try {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    const data = await response.json();
    return {[source]: data} as typeof data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return undefined
  }
};

// APIKEYs should be stored in .env
export const getNewsSources = (params: fetchAllNewsParamsProps) => [
  {
    source: 'News Api',
    url: NEWS_API_URL,
    params: { apiKey: 'd661a0c5de4e4437a0b486dbc29d7b5b', ...params?.newApi},
  },
  {
    source: 'The Guardian News',
    url: GUARDIAN_URL,
    params: { apiKey: '3d73218b-6148-4731-9d1b-213b029af948', ...params?.guardianNews },
  },
  {
    source: 'New York Times',
    url: NEW_YORK_TIMES_URL,
    params: { 'api-key': 'ZufERdb6s0nJksdWQvEAhfp5073Pmw1A', ...params?.newYorkTimes }
  }
];
