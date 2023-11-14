import Image from "next/image";
import { ArticleCardProps } from '@/types/index';

const ArticleCard: React.FC<ArticleCardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl w-96">
      <figure><Image src={imageUrl} alt="Article" width={100} height={100}/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
