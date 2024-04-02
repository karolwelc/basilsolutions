import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const Faq = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>More about us<br className='sm:block hidden'/></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We specialize in supplying stores and wholesalers with authentic sneakers and apparel. We sell limited sneakers from the latest releases, as well as a variety of popular casual shoes like Crocs and Birkenstocks.
       
        </p>
        
      </div>
      {/* <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div> */}
    </section>
  )
}

export default Faq
