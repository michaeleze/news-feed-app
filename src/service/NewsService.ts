import type { apiClientFunctionProps, fetchAllNewsParamsProps } from "@/types/";
import { fetchNewsFromAPI, getNewsSources } from "@/utility/apiClient";

class NewsService {
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
   const SOURCES = getNewsSources(params)

   const getNewsSource = SOURCES.map(source => this.apiClient(source))

    const results = await Promise.allSettled([...getNewsSource]);

    const allNews = results.map(result =>
      result.status === 'fulfilled' ? result.value : undefined
    );

    this.validateNews(allNews);
    return allNews;
  }

  // public async fetchSpecificNews(params: fetchNewsFromAPIProps): Promise<any> {
  //   return this.apiClient(params);
  // }
}

export const newsService = new NewsService(fetchNewsFromAPI);

newsService.fetchAllNews({
  newApi: { country: 'de', q: '', from:''},
  guardianNews: {country: 'de', q: '', 'from-date': ''},
  newYorkTimes: { query: '', 'begin_date': ''},
});
