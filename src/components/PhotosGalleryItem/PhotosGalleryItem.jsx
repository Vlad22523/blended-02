import { GridItem } from '..';
import styles from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ avg, alt, src }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: avg, borderColor: avg }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
