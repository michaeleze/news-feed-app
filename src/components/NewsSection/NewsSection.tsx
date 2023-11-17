import dynamic from 'next/dynamic';
import { getArticles } from '@/utility';
import { memo } from 'react';
import { NO_DATA } from '@/constants';

const CardList = dynamic(() => import('@/components/CardList/CardList'))

const NewsSection: React.FC<{ source: string, results: any }> = ({ source, results }) => {
  if (!results) return null;
  const articles = getArticles(source, results);

  return (
    <>
      <p>{source}</p>
      {articles.length > 0 ? <CardList articles={articles} key={results?.slug_name} /> : <p>{NO_DATA}</p>}
    </>
  )
};

export default memo(NewsSection);
