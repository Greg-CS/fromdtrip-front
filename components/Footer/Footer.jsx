import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
export const Footer = () => {
  const router = useRouter();
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    if (router.pathname === "/cart") {
      setIsCart(true)
    } else {
      setIsCart(false)
    }
  }, [router.pathname])

  return (
      <AnimatePresence>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          id='footer' 
          className={`items-center justify-around p-10 bg-black footer text-[#EAAC8B]  
          ${isCart ? "hidden" : "grid lg:flex"}`}
        >
        <div className='grid gap-10 text-center place-items-center lg:place-items-start lg:text-left'>
          <img src='/img/Logo.png' alt='footer logo' className='h-[50px] w-[50px]' />
          <span className='text-[20px]'>
            Socially and environmentally progressive street wear
          </span>
          <div className='flex gap-10'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
            <path d="M27 5.3999C15.0714 5.3999 5.40002 15.0713 5.40002 26.9999C5.40002 37.8287 13.3776 46.7711 23.7708 48.3335V32.7239H18.4266V27.0467H23.7708V23.2685C23.7708 17.0135 26.8182 14.2685 32.0166 14.2685C34.506 14.2685 35.8236 14.4539 36.4464 14.5367V19.4921H32.9004C30.6936 19.4921 29.9232 21.5855 29.9232 23.9435V27.0467H36.3906L35.514 32.7239H29.9232V48.3785C40.4658 46.9493 48.6 37.9349 48.6 26.9999C48.6 15.0713 38.9286 5.3999 27 5.3999Z" fill="white"/>
          </svg> */}
            <Link href={'https://twitter.com/FromDTrip'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="59" viewBox="0 0 50 59" fill="none">
                <g clipPath="url(#clip0_23_88)">
                  <path d="M28.728 6.45312C23.7069 6.45312 19.6238 11.4312 19.6238 17.5529C19.6238 17.9208 19.6993 18.2806 19.7288 18.6405C13.5205 17.9168 8.03044 14.2701 4.30154 8.69227C4.12772 8.42437 3.8588 8.28043 3.57675 8.30442C3.29799 8.32841 3.04874 8.52434 2.91099 8.82022C2.12717 10.4636 1.67786 12.3549 1.67786 14.3861C1.67786 16.8452 2.39937 19.0963 3.51444 20.9436C3.29799 20.8276 3.06185 20.7637 2.85852 20.6237C2.59943 20.4558 2.28787 20.4638 2.03534 20.6477C1.78281 20.8316 1.62867 21.1635 1.62539 21.5194V21.6473C1.62539 25.4179 3.22583 28.6927 5.58714 30.6999C5.56091 30.6959 5.53467 30.7079 5.50843 30.6999C5.21983 30.6399 4.92795 30.7639 4.73445 31.0318C4.54095 31.2997 4.47864 31.6715 4.56391 32.0114C5.50187 35.566 7.89598 38.281 10.8607 39.2726C8.49943 40.984 5.76096 41.9916 2.80605 41.9916C2.16652 41.9916 1.55324 41.9516 0.943234 41.8636C0.549682 41.7997 0.172528 42.0796 0.0413443 42.5354C-0.0931193 42.9912 0.0544627 43.499 0.392261 43.7509C4.1802 46.7138 8.67653 48.4531 13.5107 48.4531C21.3456 48.4531 27.4916 44.4626 31.614 38.7608C35.7365 33.059 37.8846 25.6538 37.8846 18.7364C37.8846 18.4446 37.8649 18.1607 37.8584 17.8728C39.3965 16.4373 40.7707 14.754 41.8464 12.7867C42.0596 12.4069 42.0366 11.8991 41.7906 11.5472C41.5479 11.1953 41.138 11.0874 40.7969 11.2833C40.364 11.5192 39.8589 11.5432 39.4064 11.7311C40.0032 10.7595 40.5149 9.71188 40.8231 8.53233C40.9281 8.12849 40.8133 7.68466 40.5411 7.42076C40.2689 7.16086 39.8885 7.12887 39.59 7.34878C38.1568 8.38439 36.5695 9.11211 34.8936 9.55594C33.2669 7.70065 31.1254 6.45312 28.728 6.45312ZM28.728 8.50034C30.8696 8.50034 32.8045 9.61592 34.159 11.3792C34.3623 11.6352 34.6608 11.7431 34.9461 11.6671C36.0415 11.4032 37.0811 11.0154 38.0945 10.5156C37.5107 11.4752 36.7892 12.2949 35.9431 12.9147C35.5594 13.1426 35.379 13.6824 35.52 14.1742C35.6578 14.662 36.0776 14.9459 36.4941 14.8339C37.3337 14.71 38.0814 14.2941 38.8816 14.0342C38.1634 14.9819 37.3763 15.8376 36.5203 16.5933C36.2875 16.8012 36.1596 17.1371 36.1792 17.4889C36.1924 17.9048 36.2055 18.3166 36.2055 18.7364C36.2055 25.134 34.1918 32.0794 30.3547 37.3853C26.5175 42.6913 20.8832 46.4059 13.5107 46.4059C10.1622 46.4059 7.00065 45.5022 4.14412 43.9109C7.68609 43.579 10.9526 42.0516 13.5894 39.5285C13.8648 39.2606 13.9731 38.8128 13.8616 38.405C13.7501 37.9971 13.4418 37.7172 13.0909 37.7052C10.3229 37.6452 8.00421 35.682 6.7678 32.907C6.81371 32.907 6.85307 32.907 6.89898 32.907C7.72872 32.907 8.54862 32.7791 9.31277 32.5232C9.68008 32.3912 9.93261 31.9754 9.91949 31.5076C9.90637 31.0398 9.63417 30.6399 9.26029 30.5399C6.27258 29.8042 4.03262 26.8374 3.51444 23.1508C4.36057 23.5066 5.22639 23.7865 6.16435 23.8225C6.54807 23.8505 6.8957 23.5586 7.01377 23.1148C7.13183 22.6709 6.98753 22.1831 6.66285 21.9352C4.66886 20.3078 3.35702 17.5369 3.35702 14.3861C3.35702 13.2185 3.60627 12.147 3.93423 11.1233C8.13211 16.7412 14.0092 20.4718 20.6471 20.8796C20.9094 20.8956 21.1652 20.7637 21.3358 20.5198C21.5063 20.2719 21.5719 19.944 21.5129 19.6321C21.385 18.9684 21.303 18.2646 21.303 17.5529C21.303 12.5388 24.6154 8.50034 28.728 8.50034Z" fill="#EAAC8B" />
                </g>
                <defs>
                  <clipPath id="clip0_23_88">
                    <rect width="50" height="59" fill="#EAAC8B" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href={'https://www.tiktok.com/@fromdtrip'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                <path d="M9.72001 4.32007C6.74955 4.32007 4.32001 6.74961 4.32001 9.72007V44.2801C4.32001 47.2505 6.74955 49.6801 9.72001 49.6801H44.28C47.2505 49.6801 49.68 47.2505 49.68 44.2801V9.72007C49.68 6.74961 47.2505 4.32007 44.28 4.32007H9.72001ZM9.72001 6.48007H44.28C46.0853 6.48007 47.52 7.91477 47.52 9.72007V44.2801C47.52 46.0854 46.0853 47.5201 44.28 47.5201H9.72001C7.91471 47.5201 6.48001 46.0854 6.48001 44.2801V9.72007C6.48001 7.91477 7.91471 6.48007 9.72001 6.48007ZM28.1264 10.8001C27.8404 10.8001 27.566 10.9136 27.3635 11.1157C27.161 11.3178 27.047 11.5919 27.0464 11.878C27.0464 11.878 27.0345 17.1432 27.0232 22.4206C27.0175 25.0593 27.0106 27.7008 27.0063 29.6895C27.0021 31.6783 27 32.9366 27 33.0413C27 35.0018 25.2195 36.604 23.1905 36.604C21.1776 36.604 19.5708 34.9951 19.5708 32.9823C19.5708 30.9694 21.1776 29.3626 23.1905 29.3626C23.2587 29.3626 23.3961 29.385 23.6313 29.4132C23.783 29.4314 23.9369 29.4172 24.0827 29.3715C24.2285 29.3258 24.363 29.2498 24.4772 29.1483C24.5915 29.0468 24.6829 28.9222 24.7454 28.7828C24.8079 28.6434 24.8402 28.4923 24.84 28.3395V23.8023C24.84 23.5275 24.7353 23.2631 24.5472 23.0629C24.3591 22.8626 24.1017 22.7416 23.8275 22.7244C23.6592 22.7138 23.4474 22.6927 23.1905 22.6927C17.521 22.6927 12.9009 27.3128 12.9009 32.9823C12.9009 38.6517 17.521 43.2718 23.1905 43.2718C28.8598 43.2718 33.48 38.6517 33.48 32.9823V23.2095C35.051 24.466 37.0089 25.2619 39.1711 25.2619C39.466 25.2619 39.7465 25.2445 40.0148 25.2198C40.283 25.195 40.5323 25.071 40.7138 24.8719C40.8952 24.6729 40.9958 24.4133 40.9957 24.144V19.1005C40.9959 18.8274 40.8926 18.5645 40.7067 18.3645C40.5208 18.1645 40.2661 18.0423 39.9938 18.0226C36.5975 17.7789 33.8902 15.1333 33.537 11.7683C33.5093 11.5027 33.3843 11.2568 33.186 11.078C32.9877 10.8993 32.7303 10.8002 32.4633 10.8001H28.1264ZM29.2043 12.9601H31.6681C32.453 16.5227 35.2369 19.2396 38.8357 19.921V23.0155C36.5257 22.8982 34.4968 21.7458 33.3028 19.9294C33.1751 19.7351 32.9881 19.5871 32.7695 19.5075C32.5509 19.428 32.3125 19.4211 32.0897 19.488C31.867 19.5548 31.6717 19.6918 31.533 19.8785C31.3943 20.0652 31.3196 20.2917 31.32 20.5243V32.9823C31.32 37.4842 27.6926 41.1118 23.1905 41.1118C18.6885 41.1118 15.0609 37.4842 15.0609 32.9823C15.0609 28.6617 18.4314 25.2323 22.68 24.9561V27.3059C19.7493 27.5786 17.4108 29.9833 17.4108 32.9823C17.4108 36.162 20.0107 38.764 23.1905 38.764C26.354 38.764 29.16 36.2735 29.16 33.0413C29.16 33.0942 29.162 31.6825 29.1663 29.6937C29.1705 27.705 29.1775 25.0635 29.1832 22.4248C29.1934 17.687 29.2023 13.8772 29.2043 12.9601Z" fill="#EAAC8B" />
              </svg>
            </Link>
            <Link href={"https://www.instagram.com/fromdtrip/"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                <path d="M17.28 3.23999C9.53907 3.23999 3.23999 9.53907 3.23999 17.28V36.72C3.23999 44.4609 9.53907 50.76 17.28 50.76H36.72C44.4609 50.76 50.76 44.4609 50.76 36.72V17.28C50.76 9.53907 44.4609 3.23999 36.72 3.23999H17.28ZM17.28 5.39999H36.72C43.2934 5.39999 48.6 10.7066 48.6 17.28V36.72C48.6 43.2934 43.2934 48.6 36.72 48.6H17.28C10.7066 48.6 5.39999 43.2934 5.39999 36.72V17.28C5.39999 10.7066 10.7066 5.39999 17.28 5.39999ZM39.96 11.88C39.3871 11.88 38.8377 12.1076 38.4326 12.5126C38.0276 12.9177 37.8 13.4671 37.8 14.04C37.8 14.6129 38.0276 15.1623 38.4326 15.5673C38.8377 15.9724 39.3871 16.2 39.96 16.2C40.5329 16.2 41.0823 15.9724 41.4873 15.5673C41.8924 15.1623 42.12 14.6129 42.12 14.04C42.12 13.4671 41.8924 12.9177 41.4873 12.5126C41.0823 12.1076 40.5329 11.88 39.96 11.88ZM27 15.12C20.4516 15.12 15.12 20.4516 15.12 27C15.12 33.5483 20.4516 38.88 27 38.88C33.5483 38.88 38.88 33.5483 38.88 27C38.88 20.4516 33.5483 15.12 27 15.12ZM27 17.28C32.381 17.28 36.72 21.619 36.72 27C36.72 32.381 32.381 36.72 27 36.72C21.619 36.72 17.28 32.381 17.28 27C17.28 21.619 21.619 17.28 27 17.28Z" fill="#EAAC8B" />
              </svg>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-24'>
          <div className='grid gap-10'>
            <div className='h-12'>
              <span className='text-[20px] font-extrabold'>
                Help
              </span>
            </div>
            <div className='grid gap-5'>
              <a href="#my_modal_7" className="">Size guide</a>
              {/* Put this part before </body> tag */}
              <div className="modal" id="my_modal_7">
                <div className="modal-box bg-[#355070]">
                  <p className="py-4">
                    Fromdtrip Size Guide <br/> <br/>

                    Women&apos;s Sizes: <br/> <br/>

                    Tops: <br/> <br/>

                    Small: <br/> <br/>

                    Bust: 32-34 inches <br/> <br/>
                    Waist: 24-26 inches <br/> <br/>
                    Hips: 34-36 inches <br/> <br/>


                    Medium: <br/> <br/>

                    Bust: 34-36 inches <br/> <br/>
                    Waist: 26-28 inches <br/> <br/>
                    Hips: 36-38 inches <br/> <br/>
                    
                    Large: <br/> <br/>
                    Bust: 36-38 inches <br/> <br/>
                    Waist: 28-30 inches <br/> <br/>
                    Hips: 38-40 inches <br/> <br/>
                    
                    X-Large: <br/> <br/>
                    Bust: 38-40 inches <br/> <br/>
                    Waist: 30-32 inches <br/> <br/>
                    Hips: 40-42 inches <br/> <br/>

                    Dresses: <br/> <br/>

                    Small: <br/> <br/>
                    Bust: 32-34 inches <br/> <br/>
                    Waist: 24-26 inches <br/> <br/>
                    Hips: 34-36 inches <br/> <br/>
                    Medium: <br/> <br/>
                    Bust: 34-36 inches <br/> <br/>
                    Waist: 26-28 inches <br/> <br/>
                    Hips: 36-38 inches <br/> <br/>
                    Large: <br/> <br/>
                    Bust: 36-38 inches <br/> <br/>
                    Waist: 28-30 inches <br/> <br/>
                    Hips: 38-40 inches <br/> <br/>
                    X-Large: <br/> <br/>
                    Bust: 38-40 inches <br/> <br/>
                    Waist: 30-32 inches <br/> <br/>
                    Hips: 40-42 inches <br/> <br/>
                    Bottoms: <br/> <br/>

                    Small: <br/> <br/>
                    Waist: 24-26 inches <br/> <br/>
                    Hips: 34-36 inches <br/> <br/>

                    Medium: <br/> <br/>
                    Waist: 26-28 inches <br/> <br/>
                    Hips: 36-38 inches <br/> <br/>
                    Large: <br/> <br/>
                    Waist: 28-30 inches <br/> <br/>
                    Hips: 38-40 inches <br/> <br/>
                    X-Large: <br/> <br/>
                    Waist: 30-32 inches <br/> <br/>
                    Hips: 40-42 inches <br/> <br/>
                    Men&apos;s Sizes: <br/> <br/>

                    Tops: <br/> <br/>

                    Small: <br/> <br/>
                    Chest: 34-36 inches <br/> <br/>
                    Waist: 28-30 inches <br/> <br/>
                    Medium: <br/> <br/>
                    Chest: 36-38 inches <br/> <br/>
                    Waist: 30-32 inches <br/> <br/>
                    Large: <br/> <br/>
                    Chest: 38-40 inches <br/> <br/>
                    Waist: 32-34 inches <br/> <br/>
                    X-Large: <br/> <br/>
                    Chest: 40-42 inches <br/> <br/>
                    Waist: 34-36 inches <br/> <br/>
                    Bottoms: <br/> <br/>

                    Small: <br/> <br/>
                    Waist: 28-30 inches <br/> <br/>
                    Inseam: 30-32 inches <br/> <br/>
                    Medium: <br/> <br/>
                    Waist: 30-32 inches <br/> <br/>
                    Inseam: 32-34 inches <br/> <br/>
                    Large: <br/> <br/>
                    Waist: 32-34 inches <br/> <br/>
                    Inseam: 34-36 inches <br/> <br/>
                    X-Large: <br/> <br/>
                    Waist: 34-36 inches <br/> <br/>
                    Inseam: 36-38 inches <br/> <br/>
                    Children&apos;s Sizes: <br/> <br/>

                    Age Range: <br/> <br/>

                    Small (2-4 years) <br/> <br/>
                    Height: 34-38 inches <br/> <br/>
                    Medium (4-6 years) <br/> <br/>
                    Height: 38-42 inches <br/> <br/>
                    Large (6-8 years) <br/> <br/>
                    Height: 42-46 inches <br/> <br/>
                    X-Large (8-10 years) <br/> <br/>
                    Height: 46-50 inches <br/> <br/>
                    If you have any questions or need further assistance with sizing, please feel free to contact our customer support team at [Customer Support Email] or [Customer Support Phone Number]. We want you to have a fantastic shopping experience with Fromdtrip, and the right size is the first step to achieving that.
                  </p>
                  <div className="modal-action">
                    <a href="#footer" className="btn">close</a>
                  </div>
                </div>
              </div>
              <a href="#my_modal_8" className="">Shipping information</a>
              {/* Put this part before </body> tag */}
              <div className="modal" id="my_modal_8">
                <div className="modal-box bg-[#355070]">
                  <p className="py-4">
                    At Fromdtrip, we are committed to providing you with a seamless shopping experience, including reliable and efficient shipping services. Below, you&apos;ll find important information about our shipping policies. <br/> <br/>

                    1. Shipping Destinations: <br/> <br/>

                    We are proud to offer shipping services to customers in Puerto Rico and select international destinations. <br/> <br/>
                    2. Processing Time: <br/> <br/>

                    Orders are typically processed within 1-2 business days after payment confirmation. Please note that processing times may vary during busy seasons and promotional periods. <br/> <br/>
                    3. Shipping Methods: <br/> <br/>

                    We offer various shipping options to suit your needs, including standard and expedited shipping. The available shipping methods will be displayed during the checkout process. <br/> <br/>
                    4. Shipping Costs: <br/> <br/>

                    Shipping costs will be calculated based on your location, the selected shipping method, and the weight/size of your items. You can view the shipping costs during the checkout process. <br/> <br/>
                    5. Estimated Delivery Times: <br/> <br/>

                    Delivery times will depend on your location and the chosen shipping method. Typically, deliveries within Puerto Rico will take 2-5 business days, while international deliveries may take longer. <br/> <br/>
                    6. Order Tracking: <br/> <br/>

                    We provide order tracking services to help you stay updated on the status of your shipment. You will receive a tracking number via email once your order has been dispatched. <br/> <br/>
                    7. Customs and Import Duties (For International Shipments): <br/> <br/>

                    Please note that for international orders, customs and import duties may apply. These fees are the responsibility of the recipient and are not included in the product or shipping costs. <br/> <br/>
                    8. Customer Support: <br/> <br/>

                    Our customer support team is here to assist you with any shipping-related inquiries or concerns. Feel free to reach out to us at [Customer Support Email] or [Customer Support Phone Number]. <br/> <br/>
                    9. Returns and Refunds: <br/> <br/>

                    For information on returns and refunds, please refer to our [Return Policy] on our website. <br/> <br/>
                    10. Additional Information: <br/> <br/>

                    For more details on our shipping policies, please visit our [Shipping Policy] page on our website. <br/> <br/>
                    Thank you for choosing Fromdtrip. We look forward to serving you and ensuring a smooth and timely delivery of your orders. <br/> <br/>

                    Safe travels and happy shopping!
                  </p>
                  <div className="modal-action">
                    <a href="#footer" className="btn">close</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid gap-10'>
            <div className='h-12'>
              <span className='text-[20px] font-extrabold'>
                About us
              </span>
            </div>
            <div className='grid gap-5'>
              <a href="#my_modal_9" className="">Our Values</a>
              <div className="modal" id="my_modal_9">
                <div className="modal-box bg-[#355070]">
                  <p>

                  Our Values and Commitment to the Boricuan Spirit <br/> <br/>

                  At Fromdtrip, we&apos;re more than just a clothing brand; we are the embodiment of the Boricuan spirit through design and embroidery. We are deeply committed to celebrating the vibrant and resilient culture of Puerto Rico, and we strive to embody these core values in everything we do: <br/> <br/>

                  1. Artistry and Craftsmanship: <br/> <br/>

                  We are passionate about the art of design and embroidery. Each piece we create is a work of art, meticulously crafted to capture the essence of Puerto Rico&apos;s culture and spirit. <br/> <br/>
                  2. Authenticity and Tradition: <br/> <br/>

                  We draw inspiration from the rich traditions and history of Puerto Rico, infusing every design with the island&apos;s unique heritage. We stay true to our roots and celebrate the authenticity of Boricuan artistry. <br/> <br/>
                  3. Community Connection: <br/> <br/>

                  The Boricuan spirit is deeply rooted in community. We aim to connect with the Puerto Rican community, both on the island and in the diaspora, through our designs and the stories they tell. <br/> <br/>
                  4. Quality and Durability: <br/> <br/>

                  We take pride in the quality and durability of our products. Every embroidered detail is a testament to our commitment to offering clothing that lasts and continues to inspire. <br/> <br/>
                  5. Sustainability and Responsibility: <br/> <br/>

                  Our dedication to sustainability involves responsible sourcing of materials and eco-friendly production methods. We are mindful of our environmental impact and strive to protect Puerto Rico&apos;s natural beauty. <br/> <br/>
                  6. Inclusivity and Diversity: <br/> <br/>
                  Puerto Rico is a diverse and welcoming place, and we celebrate that diversity by offering designs that resonate with everyone, regardless of their background, age, or gender.  <br/> <br/>
                  7. Empowerment Through Style: <br/> <br/>

                  We want our customers to feel empowered when they wear our designs. Our clothing is an expression of Boricuan identity and a source of pride for those who celebrate Puerto Rico. <br/> <br/>
                  8. Celebration of Culture: <br/> <br/>

                  Life in Puerto Rico is a constant celebration, and we want our designs to capture that spirit. Our embroidered styles reflect the vibrancy, festivities, music, and culture that make Puerto Rico unique. <br/> <br/>

                  Fromdtrip is a celebration of Puerto Rico, and together, we&apos;ll continue to stitch the fabric of this beautiful culture with every design we create.

                  </p>
                  <div className="modal-action">
                    <a href="#footer" className="btn">close</a>
                  </div>
              </div>

              </div>
              <a href="#my_modal_10" className="">Contact Us</a>
                <div className="modal" id="my_modal_10">
                  <div className="modal-box bg-[#355070]">
                    <p>
                      Contact Us <br/> <br/>

                      At Fromdtrip, we value your feedback, questions, and the opportunity to connect with our community. Our dedicated team is here to assist you in any way we can. Whether you have inquiries about our products, need assistance with an order, or simply want to share your thoughts, we&apos;re ready to listen and support you. <br/> <br/>

                      How to Reach Us: <br/> <br/>

                      Customer Support Email: from.the.trip@gmail.com
                      Customer Support Phone Number: 939-265-0722 <br/> <br/>

                      {/* Our Address: <br/> <br/>
                      [Your Physical Address, if applicable] <br/> <br/> */}

                      Social Media: <br/> <br/>
                      Stay connected with us on our social media platforms, where you can get the latest updates on our designs, promotions, and engage with our community of Boricuan spirit enthusiasts. <br/> <br/>
                      
                      <a href='https://www.instagram.com/fromdtrip/'>
                        Instagram
                      </a>                     <br/> <br/>
                      <a href='https://twitter.com/FromDTrip'>
                        Twitter
                      </a>                     <br/> <br/>
                      <a href='https://www.tiktok.com/@fromdtrip'>
                        TikTok
                      </a>                     <br/> <br/>

                      Fromdtrip is not just a brand; it&apos;s a celebration of Puerto Rico, its culture, and its people. Your thoughts and experiences matter to us, and we are eager to hear from you. Whether you have a question, feedback, or simply want to chat about all things Boricua, please don&apos;t hesitate to reach out. We look forward to connecting with you.

                      Thank you for being a part of our journey, and we can&apos;t wait to make your Fromdtrip experience a memorable one.

                      Safe travels and happy shopping!
                    </p>
                  <div className="modal-action">
                    <a href="#footer" className="btn">close</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
}
