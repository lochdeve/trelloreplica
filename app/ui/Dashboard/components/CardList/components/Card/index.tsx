import type { CardType } from '@/app/types/index';
import '../../../../index.css';

const Card: React.FC<{ cardInfo: CardType }> = ({ cardInfo }) => {
  return <div className='card'>{cardInfo.title}</div>;
};

export default Card;
