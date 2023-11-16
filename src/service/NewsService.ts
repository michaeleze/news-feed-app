import type { apiClientFunctionProps, fetchAllNewsParamsProps, fetchNewsFromAPIProps } from "@/types/";
import { getNewsParams, useFetch } from "@/utility";

export class NewsService {
  private apiClient: apiClientFunctionProps;

  constructor(apiClient: apiClientFunctionProps) {
    this.apiClient = apiClient;
  }

  private validateNews(newsArray: (any | undefined)[]): void {
    newsArray.forEach((news, index) => {
      if (!news || news === undefined || news === null) {
        console.warn(`Warning: Failed to fetch news from API ${index + 1}`);
      }
    });
  }

  public async fetchAllNews(params: fetchAllNewsParamsProps): Promise<any[]> {
    // Get all new params
   const SOURCES = getNewsParams(params)

    // Fetch each news
   const getNewsSource = SOURCES.map(source => this.fetchSpecificNews(source))

   // Resolve all fetch news once
    const results = await Promise.allSettled(getNewsSource);

    const allNews = results.map(result =>
      result.status === 'fulfilled' ? result.value : undefined
    );

    this.validateNews(allNews);
    return allNews;
  }

  public async fetchSpecificNews(params: fetchNewsFromAPIProps): Promise<any> {
    return this.apiClient(params);
  }
}

export const newsService = new NewsService(useFetch);
