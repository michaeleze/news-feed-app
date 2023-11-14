import { ArticleCardListProps } from '@/types/index';
import ArticleCard from "@/components/Card/Card";

const ArticleCardList: React.FC<ArticleCardListProps> = ({ listItems }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20'>
    {listItems?.map((item) => (
      <ArticleCard {...item} key={item?.title}/>
    )
    )}
  </div>
);

export default ArticleCardList;
