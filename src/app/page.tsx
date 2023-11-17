"use client";
import { NAVBAR_ATTR } from '@/constants';
import { newsService } from '@/service/NewsService';
import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback } from 'react';

const SearchAndFilter = dynamic(() => import('@/components/SearchBarAndFilters/SearchBarWithFilters'), {
  loading: () => <p>Loading...</p>,
})

const NavBar = dynamic(() => import('@/components/NavBar/NavBar'), {
  loading: () => <p>Loading...</p>,
})

const NewsSection = dynamic(() => import('@/components/NewsSection/NewsSection'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  const [state, setState] = useState<Array<any>>([]);
  const [selectedItem, setSelectedItem] = useState<Record<string, string>>({});
  const [selectedDate, setSelectedDate] = useState<string | undefined >('');

  // Fetch initial news on page load
  useEffect(() => {
    (async () => {
      const newsStream = await newsService.fetchAllNews({
        newApi: { country: 'us', q: '', to: '' },
        guardianNews: { country: 'us', q: '' },
        newYorkTimes: { q: '', 'end_date': '' },
      });

      setState(newsStream);
    })();
  }, []);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: event.target.value, to: '' },
      guardianNews: { country: 'us', q: event.target.value },
      newYorkTimes: { q: event.target.value, 'end_date': '' },
    });
    setState(newsStream);
  }

  const handleSearchNews = async () => {
   // TODO fix filtering
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: selectedItem.source, to: selectedDate },
      guardianNews: { country: 'us', q: selectedItem.source, 'to-date': selectedDate },
      newYorkTimes: { q: selectedItem.source, 'end_date': selectedDate },
    });

    setState(newsStream);
  }

  const handlefilterByDate = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value && event.target.value === '') {
      return
    }

      setSelectedDate(event.target.value);

      const newsStream = await newsService.fetchAllNews({
        newApi: { country: 'us', q: event.target.value, to: event.target.value },
        guardianNews: { country: 'us', q: event.target.value, 'to-date': event.target.value },
        newYorkTimes: { q: event.target.value, 'end_date': event.target.value },
      });

      setState(newsStream);
  },[selectedDate]);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem({...selectedItem, [event.target.name ]: event.target.value });
  }, [selectedItem])

  const searchFunctions = {
    handleSearch,
    handleSearchNews,
    handlefilterByDate,
    handleChange,
    selectedItem,
    selectedDate,
  }

  return (
    <>
      <NavBar {...NAVBAR_ATTR} />
      <main className="flex min-h-screen flex-col py-20 px-3 items-center justify-between">
        <SearchAndFilter {...searchFunctions} />
        {
          state?.map((item) => <NewsSection source={item.newsSource} key={item.newsSource} results={item?.data} />)
        }
      </main >
    </>
  )
}
