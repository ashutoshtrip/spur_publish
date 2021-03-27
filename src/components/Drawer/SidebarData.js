import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Engineering',
    path: '/engineering',
    icon: <FaIcons.FaGraduationCap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Computer Science',
        path: '/engineering/cse',
        icon: <RiIcons.RiComputerLine />
      },
      {
        title: 'Electronics and Communication',
        path: '/engineering/ece',
        icon: <FcIcons.FcElectronics />
      },
      
    ]
  },
  {
    title: 'Exams',
    path: '/exams',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'JEE',
        path: '/exams/jee',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'UPSC',
        path: '/exams/upsc',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'NEET',
        path: '/exams/neet',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'SSC',
        path: '/exams/SSC',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'CAT',
        path: '/exams/CAT',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Medicine',
    path: '/medicine',
    icon: <FaIcons.FaBriefcaseMedical />
  },
  {
    title: 'Government',
    path: '/government',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Management',
    path: '/management',
    icon: <FaIcons.FaEnvelopeOpenText />,


    
  },
  {
    title: 'Research',
    path: '/reasearch',
    icon: <GiIcons.GiArchiveResearch />
  },
  {
    title: 'Accountant',
    path: '/accountant',
    icon: <MdIcons.MdAccountBalance />
    
    
  },
  {
    title: 'Music',
    path: '/music',
    icon: <RiIcons.RiMusicFill />
    
  },
  {
    title: 'Fitness',
    path: '/fitness',
    icon: <IoIcons.IoIosFitness />,

  },
  {
    title: 'Influencer',
    path: '/influencer',
    icon: <FaIcons.FaPhotoVideo />
  },
  {
    title: 'Author',
    path: '/author',
    icon: <BsIcons.BsBookHalf />
  },
  {
    title: 'Business',
    path: '/business',
    icon: <IoIcons.IoIosBusiness />
  }
];