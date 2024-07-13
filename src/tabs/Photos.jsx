import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [searchValue, setSearchValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const handleSubmit = value => {
    setSearchValue(value);
  };

  const onClick = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    async function fetchPhotos() {
      setIsLoad(true);
      try {
        const { photos } = await getPhotos(searchValue, page);
        setPhotos(prev => [...prev, ...photos]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoad(false);
      }
    }
    fetchPhotos();
  }, [searchValue, page]);

  console.log(photos);
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleSubmit} />
      <PhotosGallery gallery={photos} />
      {photos.length !== 0 && <Button onClick={onClick}>Load More</Button>}
      {isLoad && <Loader />}
    </>
  );
};
