import { ArticleCardListProps } from '@/types/index';
import Card from "@/components/Card/Card";

const ArticleCardList: React.FC<ArticleCardListProps> = ({ articles }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20'>
    {articles?.map((item) => (
      <Card {...item} key={item?.title}/>
    )
    )}
  </div>
);

export default ArticleCardList;
