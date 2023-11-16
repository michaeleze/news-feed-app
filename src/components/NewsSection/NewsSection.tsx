import dynamic from 'next/dynamic';
import { getArticles } from '@/utility';

const CardList = dynamic(() => import('@/components/CardList/CardList'))

const NewsSection: React.FC<{ source: string, results: any }> = ({ source, results }) => {
  if (!results) return null;
  const articles = getArticles(source, results);

  return (
    <>
      <p>{source}</p>
      <CardList articles={articles} key={results?.slug_name} />
    </>
  )
};

export default NewsSection;
