// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import Features1Img from '../../Static/tourleader.jpg';


  import Product1Img from '../../Static/man-1.jpg';
  import Product2Img from '../../Static/man-2.jpg';
  import Product3Img from '../../Static/mio4.jpg';
  import Product4Img from '../../Static/woman-1.jpg';
  import Product5Img from '../../Static/mio.jpg';
  import Product6Img from '../../Static/woman-3.jpg';


  export const hero = {
    title: 'Troy Organization',
    subtitle:
      'Diverse tours in different locations across the country and the world accompanied by professional tour leaders and support.',
    buttonText: 'Create Trip',
  };
  
  export const stats = [
    {
      value: '6',
      text: 'Our TourLeaders',
    },
    {
      value: '2',
      text: 'Available Tours',
    },
    {
      value: '10k+',
      text: 'All Tours',
    },
    {
      value: '260+',
      text: 'Followers',
    },
  ];
  
  export const features = {
    image: <Features1Img />,
    title: 'We create your dream Trips.',
    subtitle:
      'Start your Trip with us',
    buttonText: 'Show Now',
    items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: "Diversity in travel.",
        subtitle:
          'Diverse trips with various recreational programs, featuring the ability to have multiple trips in one tour.',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Reliable tour leaders.',
        subtitle:
          'Experience your journey with our experienced tour leaders.',
      },
    ],
   
  };
  
 
  
  export const products = {
    
    title: 'All TourLeaders',
  
    pages: [
      {
        
      
        productList: [
          {
            image: <Product1Img />,
          
            name: 'John Smith',
           
          },
          {
            image: <Product2Img />,
         
            name: 'David Jones',
           
          },
          {
            image: <Product3Img />,

            name: 'Sarah Johnson',
            
          },
          {
            image: <Product4Img />,
       
            name: 'Michael Williams',
           
          },
          {
            image: <Product5Img />,
           
            name: 'Robert Anderson',
           
          },
          {
            image: <Product6Img />,
        
            name: 'Jessica Wilson',
           
          },
         
        ],
      },
    ],
  };
  
 
  
  
  