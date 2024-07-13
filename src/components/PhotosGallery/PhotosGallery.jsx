import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ gallery }) => {
  return (
    <Grid>
      {gallery.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} avg={avg_color} alt={alt} src={src} />
      ))}
    </Grid>
  );
};
