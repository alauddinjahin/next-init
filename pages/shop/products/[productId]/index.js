import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
      <h2>Product Details of {productId}</h2>
  )
}

export default Product