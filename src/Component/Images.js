// src/components/Image.js
import React from 'react';

const Image = ({ url, title }) => (
  <li>
    <img src={url} alt={title} className="image-item" />
  </li>
);

export default Image;
