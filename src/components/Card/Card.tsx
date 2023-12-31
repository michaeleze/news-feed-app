import type { CardProps } from '@/types/index';

const Card: React.FC<CardProps> = ({ title, content, imageUrl, source }) => {
  return (
    <div className="card max-w-sm bg-base-100 shadow-xl card-compact">
      <figure><img src={imageUrl} alt={`${title}-${imageUrl}`} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-primary">{source}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
