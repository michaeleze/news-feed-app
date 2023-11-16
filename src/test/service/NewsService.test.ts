import { NewsService } from "@/service/NewsService";
import { describe, it } from "node:test";

describe('fetchAllNews', () => {
  // Should return an array of news objects when all API calls succeed
  it('should return an array of news objects when all API calls succeed', async () => {
    // Mock the apiClient function
    const mockApiClient = jest.fn().mockResolvedValue({ news: 'example news' });

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains the expected news object
    expect(result).toContainEqual({ news: 'example news' });
  });

  // Should return an array of undefined values when all API calls fail
  it('should return an array of undefined values when all API calls fail', async () => {
    // Mock the apiClient function to throw an error
    const mockApiClient = jest.fn().mockRejectedValue(new Error('API error'));

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains only undefined values
    expect(result.every((value) => value === undefined)).toBe(true);
  });

  // Should return an array of news objects and undefined values when some API calls succeed and some fail
  it('should return an array of news objects and undefined values when some API calls succeed and some fail', async () => {
    // Mock the apiClient function to return news for the first source and throw an error for the second source
    const mockApiClient = jest
      .fn()
      .mockResolvedValueOnce({ news: 'example news' })
      .mockRejectedValueOnce(new Error('API error'));

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains the expected news object and undefined value
    expect(result).toContainEqual({ news: 'example news' });
    expect(result).toContainEqual(undefined);
  });

  // Should handle empty response from API
  it('should handle empty response from API', async () => {
    // Mock the apiClient function to return an empty response
    const mockApiClient = jest.fn().mockResolvedValue(undefined);

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains only undefined values
    expect(result.every((value) => value === undefined)).toBe(true);
  });

  // Should handle API returning unexpected data format
  it('should handle API returning unexpected data format', async () => {
    // Mock the apiClient function to return data in an unexpected format
    const mockApiClient = jest.fn().mockResolvedValue('unexpected data');

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains only undefined values
    expect(result.every((value) => value === undefined)).toBe(true);
  });

  // Should handle API returning error status code
  it('should handle API returning error status code', async () => {
    // Mock the apiClient function to throw an error with a status code
    const mockApiClient = jest.fn().mockRejectedValue({ response: { status: 500 } });

    // Create an instance of NewsService with the mock apiClient
    const newsService = new NewsService(mockApiClient);

    // Call the fetchAllNews method
    const result = await newsService.fetchAllNews({});

    // Assert that the result is an array
    expect(Array.isArray(result)).toBe(true);

    // Assert that the result contains only undefined values
    expect(result.every((value) => value === undefined)).toBe(true);
  });
});
