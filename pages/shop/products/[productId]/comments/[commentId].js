import { useRouter } from 'next/router'
import React from 'react'

const CommentDetail = () => {
    const router = useRouter();
    const { productId, commentId } = router.query;
    
    return (
        <h2>{commentId} Comment Detail for Product {productId} </h2>
    )
}

export default CommentDetail