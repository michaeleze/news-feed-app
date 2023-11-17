"use client";
import { NAVBAR_ATTR } from '@/constants';
import { newsService } from '@/service/NewsService';
import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback } from 'react';

const SearchAndFilter = dynamic(() => import('@/components/SearchBarWithFilters/SearchBarWithFilters'), {
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
  const [searchParams, setSearchParams] = useState('');

// Fetch initial news on page load
  useEffect(() => {
    console.log('effect here');
    (async () => {
      const newsStream = await newsService.fetchAllNews({
        newApi: { country: 'us', q: '', from: '' },
        guardianNews: { country: 'us', q: '' },
        newYorkTimes: { query: '', 'begin_date': '' },
      });

      setState(newsStream);
    })();
  }, []);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchParams = event.target.value;
    setSearchParams(searchParams);
  }

  const handleSearchNews = async () => {
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: searchParams, from: '' },
      guardianNews: { country: 'us', q: searchParams },
      newYorkTimes: { query: searchParams, 'begin_date': '' },
    });
    setState(newsStream);
  }

  const handlefilterByDate = async (searchParams: string) => {
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: searchParams, from: '' },
      guardianNews: { country: 'us', q: searchParams },
      newYorkTimes: { query: searchParams, 'begin_date': '' },
    });
    setState(newsStream);
  }

  const handlefilterBySource = async (searchParams: string) => {
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: searchParams, from: '' },
      guardianNews: { country: 'us', q: searchParams },
      newYorkTimes: { query: searchParams, 'begin_date': '' },
    });
  }

  const handlefilterByCategory = async (searchParams: string) => {
    const newsStream = await newsService.fetchAllNews({
      newApi: { country: 'us', q: searchParams, from: '' },
      guardianNews: { country: 'us', q: searchParams },
      newYorkTimes: { query: searchParams, 'begin_date': '' },
    });
  }

  const searchFunctions = {
    handleSearch,
    handleSearchNews,
    handlefilterByDate,
    handlefilterBySource,
    handlefilterByCategory
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
