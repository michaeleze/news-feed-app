import NewsSection from '@/components/NewsSection/NewsSection';
import { NAVBAR_ATTR, NEWSSOURCES, newsSources } from '@/constants';
import { newsService } from '@/service/NewsService';
import dynamic from 'next/dynamic';

const SearchAndFilter = dynamic(() => import('@/components/SearchBarWithFilters/SearchBarWithFilters'), {
  loading: () => <p>Loading...</p>,
})

const NavBar = dynamic(() => import('@/components/NavBar/NavBar'), {
  loading: () => <p>Loading...</p>,
})

export default async function Home() {

  // Fetch initial news on page load
  const newsStream = await newsService.fetchAllNews({
    newApi: { country: 'us', q: '', from: '' },
    guardianNews: { country: 'us', q: ''},
    newYorkTimes: { query: '', 'begin_date': '' },
  });

  return (
    <>
      <NavBar {...NAVBAR_ATTR} />
      <main className="flex min-h-screen flex-col py-20 px-3 items-center justify-between">
        <SearchAndFilter />
        {
          newsStream.map((item) => <NewsSection source={item.newsSource} key={item.newsSource} results={item?.data} />)
        }
      </main >
    </>
  )
}
