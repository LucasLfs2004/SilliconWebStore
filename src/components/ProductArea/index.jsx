import CardProduct from '../CardProduct'
import * as C from './styles'

const ProductArea = () => {
    const products = [
        {
            name: 'PLACA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC, 8GB, GDDR6, 128-BIT, GV-N4060EAGLE-OC-8GD',
            brand: 'Gigabyte',
            image: [
                '/assets/imgProducts/placa-de-video-rtx-4060-ti-gigabyte1.jpg',
                '/assets/imgProducts/placa-de-video-rtx-4060-ti-gigabyte3.jpg',
                '/assets/imgProducts/placa-de-video-rtx-4060-ti-gigabyte2.jpg',
            ],
            rating: 4.5,
            amount_rating: 15,
            price: 2499.99,
            portions: 10,
            inCash: 10,
            discount: 22,
        },
        {
            name: 'MacBook Pro 14" Apple M2 Pro (16GB RAM 512GB SSD) Cinza Espacial',
            brand: 'Apple',
            image: [
                '/assets/imgProducts/macbook_pro_m2_pro_1.jpeg',
                '/assets/imgProducts/macbook_pro_m2_pro_2.jpeg',
                '/assets/imgProducts/macbook_pro_m2_pro_3.jpeg',
                '/assets/imgProducts/macbook_pro_m2_pro_4.jpeg',
                '/assets/imgProducts/macbook_pro_m2_pro_5.jpeg',
                '/assets/imgProducts/macbook_pro_m2_pro_6.jpeg',
            ],
            rating: 4.8,
            amount_rating: 30,
            price: 22999.99,
            portions: 12,
            inCash: 13.0456,
            discount: 22,
        },
    ]

    return (
        <C.Container>
            {
                products && products.map((item, index) => (
                    <CardProduct item={item} />
                ))
            }
        </C.Container>

    )
}

export default ProductArea