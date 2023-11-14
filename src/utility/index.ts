const fetchNewsFromAPI = (url, params) => {
  return fetch(url + new URLSearchParams(params))
    .then(response => response.json())
    .catch(error => console.error('Error fetching news:', error));
};

const fetchAllNews = async () => {
  const newsAPIUrl = 'https://newsapi.org/v2/top-headlines?';
  const newsCredUrl = 'https://newscredapi.org/v2/articles?';
  const guardianUrl = 'https://content.guardianapis.com/search?';
  const newYorkTimesUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?';
  const bbcNewsUrl = 'https://bbcnewsapi.org/v2/top-headlines?';

  const apiKey = 'YOUR_API_KEY'; // Replace with your API key

  const requests = [
    fetchNewsFromAPI(newsAPIUrl, { apiKey, country: 'us' }),
    fetchNewsFromAPI(newsCredUrl, { apiKey, keywords: 'technology' }),
    fetchNewsFromAPI(guardianUrl, {apiKey }),
    fetchNewsFromAPI(newYorkTimesUrl, {apiKey }),
    fetchNewsFromAPI(bbcNewsUrl, {apiKey, country: 'gb' }),
  ];

  try {
    const allNews = await Promise.all(requests);
    allNews.forEach((news, index) => {
      if(!news) {
        throw new Error(`Failed to fetch news from API ${index + 1}`);
      }
    })
    console.log('All news data:', allNews);
    return allNews;
  } catch (error) {
    console.error('Error fetching all news:', error);
  }
};

fetchAllNews();
