import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/SearchSlice';
import { Link, useNavigate } from 'react-router-dom';
import { apiKey } from '../Component/Api/Config';
import '../Component/CSS/header.css'
import Gallery from './Gallery';

function Searching() {
  const search = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const [state, setState] = useState({ images: [], loading: true, error: null });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      if (!search) return;

      setState((prevState) => ({ ...prevState, loading: true, error: null }));

      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=10&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        const { photo } = data.photos;

        if (photo.length === 0) {
          // Navigate to "No Image Found" page if no images are returned
          navigate('/no-image-found');
        } else {
          // Set the fetched images in the state
          setState((prevState) => ({
            ...prevState,
            images: photo,
            loading: false,
            error: null,
          }));
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: 'Failed to fetch images.',
          loading: false,
        }));
      }
    };

    fetchImages();
  }, [search, navigate]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSearchTerm(search));
      navigate(`/search/${search}`);
    }
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            // className="header__search-bar"
            placeholder="Search..."
          />
          {search && (
            <button type="submit" className="search-btn">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          )}
        </form>
      </div>
      <nav className="header__nav">
        <Link to="/mountain" className="nav-btn" onClick={() => dispatch(setSearchTerm('mountain'))}>
          Mountain
        </Link>
        <Link to="/bird" className="nav-btn" onClick={() => dispatch(setSearchTerm('bird'))}>
          Bird
        </Link>
        <Link to="/food" className="nav-btn" onClick={() => dispatch(setSearchTerm('food'))}>
          Food
        </Link>
        <Link to="/beach" className="nav-btn" onClick={() => dispatch(setSearchTerm('beach'))}>
          Beach
        </Link>
      </nav>
      <div className="image-container">
        {state.loading && <p>Loading...</p>}
        {state.error && <div>{state.error}</div>}
        {!state.loading && state.images.length > 0 && (
          <div className="gallery">
            {state.images.map((image) => {
                  return <Gallery data={images}/>
            //   const { farm, server, id, secret, title } = image;
            //   const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            //   return <img key={id} src={url} alt={title} className="image-item" />; */}
            //  })} 
                
          </div>
        )}
      </div>
    </>
  );
}

export default Searching;
