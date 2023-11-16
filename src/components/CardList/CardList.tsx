import type { CardListProps } from '@/types/index';
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('@/components/Card/Card'))

const CardList: React.FC<CardListProps> = ({ articles }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
    {articles?.map((item) => (
      <Card {...item} key={item?.title}/>
    )
    )}
  </div>
);

export default CardList;
