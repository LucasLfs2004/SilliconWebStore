import { useState } from 'react';

const UseEditImages = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

  return { previewImages, setPreviewImages, newImages, setNewImages };
};

export default UseEditImages;
