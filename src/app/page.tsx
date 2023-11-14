import ArticleCardList from '@/components/ArticleCardList/ArticleCardList';
import { NAVBAR_ATTR } from '@/constants';
import { mockArticleData } from '@/mock';
import dynamic from 'next/dynamic';

const SearchAndFilter = dynamic(() => import('@/components/SearchBarWithFilters/SearchBarWithFilters'), {
  loading: () => <p>Loading...</p>,
})

const NavBar = dynamic(() => import('@/components/NavBar/NavBar'), {
  loading: () => <p>Loading...</p>,
})


export default function Home() {
  return (
    <>
      <NavBar {...NAVBAR_ATTR} />
      <main className="flex min-h-screen flex-col py-20 px-3 items-center justify-between">
        <SearchAndFilter />
        <ArticleCardList articles={mockArticleData} />
      </main>
    </>
  )
}
