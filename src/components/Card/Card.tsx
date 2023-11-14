import { CardProps } from '@/types/index';

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="card max-w-sm bg-base-100 shadow-xl card-compact">
      <figure><img src={imageUrl} alt={`${title}-${imageUrl}`} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
