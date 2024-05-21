import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      
    </div> */}
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Sneakers = () => {
  return (
    <section id='sneakers' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Sneakers,<br className='sm:block hidden'/>all you need in one place</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We bring over 5 years of experience in the sneaker business, offering valuable insights and expertise to meet your needs.
        </p>
        
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Sneakers
