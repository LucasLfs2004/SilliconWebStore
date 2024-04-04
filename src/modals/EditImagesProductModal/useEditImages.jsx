import { useEffect, useState } from 'react';
import { patchImages } from '../../services/Requests';

const UseEditImages = (product, refetch, closeModal) => {
  const [previewImages, setPreviewImages] = useState(
    product?.images ? product?.images : [],
  );
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const imagesFromDatabase = product?.images
      ? Array.from(product?.images).map(file => ({
          file: file,
          id: generateUniqueId(),
        }))
      : [];
    setPreviewImages(imagesFromDatabase ? imagesFromDatabase : []);
  }, [product]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: previewImages.length >= 4 ? 4 : previewImages.length,
    slidesToScroll: 1,
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9); // Gera um ID único aleatório
  };

  const handleFileChange = event => {
    const newIdFileChange = generateUniqueId();
    const newFiles = Array.from(event.target.files).map(file => ({
      name: file?.name + newIdFileChange,
      file,
      id: newIdFileChange, // Atribui um ID único a cada arquivo
    }));
    setSelectedFiles(files => [...files, ...newFiles]);

    const newImages = newFiles.map(({ file }) => ({
      file: URL.createObjectURL(file),
      id: newIdFileChange,
    }));
    setPreviewImages(prevImages => [...prevImages, ...newImages]);
  };

  const removeImage = (path, fileId) => {
    setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));

    const novoArray = previewImages.filter(string => string.id !== fileId);
    setPreviewImages(novoArray);

    if (!path.includes('blob:http:')) {
      setImagesToDelete(prev => [...prev, path]);
    }
  };

  const handleEditImages = async () => {
    const formData = new FormData();

    let filesIndexed = [];
    for (let i = 0; i < previewImages.length; i++) {
      if (previewImages[i].file.includes('blob:http:')) {
        const filename = selectedFiles.filter(
          item => item.id === previewImages[i].id,
        );
        filesIndexed.push(filename[0].file.name);
      } else {
        filesIndexed.push(previewImages[i].file);
      }
    }

    if (product) {
      formData.append('id_product', product.id);
      imagesToDelete.forEach(element => {
        formData.append('files_to_delete', element);
      });
      filesIndexed.forEach(element => {
        formData.append('indexed_files', element);
      });
      selectedFiles.forEach(file => {
        formData.append('new_files', file.file, file.file.name);
      });
      const response = await patchImages(formData);
      if (response) {
        setImagesToDelete([]);
        setSelectedFiles([]);
        setPreviewImages([]);
        closeModal();
        refetch();
      }
    } else {
      console.error('NENHUM PRODUTO EM PROPS');
    }
  };

  const changeOrder = (position, direction) => {
    const image = previewImages[position];
    let array = [...previewImages];
    array[position] = previewImages[position + direction];
    array[position + direction] = image;
    setPreviewImages(array);
  };

  const cancelEdit = () => {
    setImagesToDelete([]);
    setPreviewImages([]);
    setSelectedFiles([]);
    closeModal();
  };

  return {
    previewImages,
    setPreviewImages,
    newImages,
    setNewImages,
    settings,
    removeImage,
    handleFileChange,
    selectedFiles,
    handleEditImages,
    changeOrder,
    cancelEdit,
  };
};

export default UseEditImages;
