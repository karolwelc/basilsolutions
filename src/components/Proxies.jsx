import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { PROXY } from '../constants'


const ProxiesCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== PROXY.length - 1 ? 'mb-6' : 'mb-0'} proxies-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
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

const Proxies = () => {
  return (
    <section id='proxies' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Proxies,<br className='sm:block hidden'/>best and fastest</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether you're a business needing to scrape data or a sneaker enthusiast looking to cop limited releases, proxies play a crucial role in facilitating your online activities
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {PROXY.map((proxie, index) => (
          <ProxiesCard key={proxie.id} {...proxie} index={index}/>
        ))}
      </div>
    </section>


    // <section id='product' className={layout.sectionReverse}>
    //   <div className={layout.sectionImgReverse}>
    //     <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
    //     <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    //   </div>
    //   <div className={layout.sectionInfo}>
    //     <h2 className={styles.heading2}>Proxies<br className='sm:block hidden'/> </h2>
    //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    //     </p>
        
    //   </div>  
    //   {/* <div className={`${layout.sectionImg} flex-col`}>
    //     {proxies.map((feature, index) => (
    //       <ProxiesCard key={feature.id} {...feature} index={index}/>
    //     ))}
    //   </div> */}
    // </section>
  )
}

export default Proxies
