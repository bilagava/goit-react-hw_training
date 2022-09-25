// import { Post } from 'components/Post';
// import { ShoppingCart } from 'components/ShoppingCart';
// import MyClassComponent from 'components/MyClassComponent';
// import data from 'components/data.json';

import css from './style.module.css';
import { Component } from 'react';
import SearchBar from 'components/SearchImage/SearchBar';
import ImageGallery from 'components/SearchImage/ImageGallery';
import Loader from '../SearchImage/Loader';
import Button from 'components/SearchImage/Button';
import Modal from 'components/SearchImage/Modal';

const APIKEY = '27833874-1888522c36b844d581276598f';
class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalImage: '',
    totalImage: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => {
          if (!image.total) {
            return alert('К сожалению по Вашему запросу ничего не найдено');
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
            totalImages: image.total,
          }));
        })
        .catch(error => error)
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleSubmit = name => {
    if (this.state.name === name) {
      return alert(`Вы уже просматриваете ${name}`);
    }
    this.setState({ name: name.toLowerCase(), images: [], page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = url => {
    this.setState({
      modalImage: url,
      showModal: true,
    });
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, showModal, modalImage, totalImage } = this.state;
    return (
      <div className={css.container}>
        {/* <Post title="Post Header" text="Post text" link="alerts" />
      <ShoppingCart items={data} />
      <MyClassComponent /> */}
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {images.length !== totalImage && !loading && (
          <Button onLoadMoreClick={this.onLoadMoreClick} />
        )}

        {showModal && (
          <Modal
            image={modalImage}
            tag={this.props.tag}
            onModalClose={this.modalClose}
          />
        )}
      </div>
    );
  }
}

export default App;
