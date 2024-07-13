import { DotLoader } from 'react-spinners';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <DotLoader color="#1900ff" />
    </div>
  );
};
