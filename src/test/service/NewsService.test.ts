import { NewsService } from "@/service/NewsService";
import { describe, beforeEach, it } from "node:test";

describe('NewsService', () => {
  let newsService: { fetchAllNews: (arg0: { newApi: { country: string; q: string; from: string; }; guardianNews: { country: string; q: string; 'from-date': string; }; newYorkTimes: { query: string; begin_date: string; }; }) => any; };
  const mockApiClient = jest.fn();

  beforeEach(() => {
    newsService = new NewsService(mockApiClient);
  });

  it('should fetch all news correctly', async () => {
    // Mock API client behavior
    mockApiClient.mockResolvedValueOnce(someMockedNewsData);

    const params = {
      newApi: { country: 'de', q: '', from: '' },
      guardianNews: { country: 'de', q: '', 'from-date': '' },
      newYorkTimes: { query: '', 'begin_date': '' },
    };

    const result = await newsService.fetchAllNews(params);

    // Assertions
    expect(mockApiClient).toHaveBeenCalledTimes(expectedNumberOfCalls);
    expect(result).toEqual(expectedResult);
  });

  // Additional tests...
});
