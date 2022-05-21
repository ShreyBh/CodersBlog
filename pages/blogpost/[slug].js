
import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//Step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page


const slug = () => {
    const router = useRouter();
    const {slug} = router.query
  
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>Title of the page {slug} </h1>
        <hr/>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deserunt culpa omnis doloribus placeat expedita nam officiis ex, officia quas beatae quidem ipsa!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus quod temporibus blanditiis. Non atque nesciunt ut voluptatem quidem magnam saepe blanditiis sint minus, autem similique? Sunt deleniti harum a eaque earum maxime voluptas accusamus neque voluptatem minima cumque voluptatibus vitae obcaecati, autem, molestiae placeat.
        </div>
        </main>
    </div>
  
}

export default slug