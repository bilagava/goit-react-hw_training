// import { Post } from 'components/Post';
// import { ShoppingCart } from 'components/ShoppingCart';
// import MyClassComponent from 'components/MyClassComponent';
// import data from 'components/data.json';

import css from './style.module.css';
import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchImage/SearchBar';
import ImageGallery from 'components/SearchImage/ImageGallery';
import Loader from '../SearchImage/Loader';
import Button from 'components/SearchImage/Button';
import Modal from 'components/SearchImage/Modal';

const APIKEY = '27833874-1888522c36b844d581276598f';

const App = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalImages, setTotalImages] = useState('');
  const [tag, setTag] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    }
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(image => {
        if (!image.total) {
          setLoading(false);
          setShowBtn(false);
          return alert('К сожалению по Вашему запросу ничего не найдено');
        }

        setImages(prevState => [...prevState, ...image.hits]);
        setTotalImages(image.total);
        setLoading(false);
        setShowBtn(true);
      })
      .catch(error => error);
  }, [name, page]);

  const handleSubmit = inputName => {
    if (name === inputName) {
      return alert(`Вы уже просматриваете ${inputName}`);
    }
    setName(inputName.toLowerCase());
    setImages([]);
    setPage(1);
  };
  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = (url, tag) => {
    setModalImage(url);
    setShowModal(true);
    setTag(tag);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
      {/* <Post title="Post Header" text="Post text" link="alerts" />
      <ShoppingCart items={data} />
      <MyClassComponent /> */}
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {images.length !== 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {!loading && images.length !== totalImages && showBtn && (
        <Button onLoadMoreClick={onLoadMoreClick} />
      )}

      {showModal && (
        <Modal image={modalImage} tag={tag} onModalClose={modalClose} />
      )}
    </div>
  );
};

export default App;
