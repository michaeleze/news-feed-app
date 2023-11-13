import ArticleCardList from '@/components/ArticleCardList/ArticleCardList';
import NavBar from '@/components/NavBar/NavBar';
import SearchAndFilter from '@/components/SearchAndFilter/SearchAndFilter';
import { NAVBAR_ATTR } from '@/constants';
import { mockArticleData } from '@/mock/feeds';

export default function Home() {
  return (
    <>
      <NavBar {...NAVBAR_ATTR} />
      <main className="flex min-h-screen flex-col py-20 px-3 items-center justify-between">
        <SearchAndFilter />
        <ArticleCardList listItems={mockArticleData} />
      </main>
    </>
  )
}
