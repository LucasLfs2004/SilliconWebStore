import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../../services/Requests';

export const useBrandCarousel = () => {
  const {
    data: brands,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['brands-carousel'],
    queryFn: async () => await getBrands(),
  });
  return { brands, isError, isLoading };
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: window.screen.width > 1024 ? 6 : 3,
  slidesToScroll: window.screen.width > 1024 ? 6 : 3,
};
