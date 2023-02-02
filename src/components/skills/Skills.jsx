import './Skills.scss';
import { useState } from 'react';
import frontend from '../../assets/frontend.jpg';
import backendIcon from '../../assets/backendIcon.png';
import contentWritingIcon from '../../assets/contentWritingIcon.png';
import arrow from '../../assets/arrow.png';
import { GoVerified } from 'react-icons/go';
import {
  frontendSkills,
  backendSkills,
  contentWritingSkills,
} from './technologies';

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 'frontend',
      title: 'Frontend Experiences',
      icon: frontend,
      img: 'https://i.postimg.cc/YSdvcmMS/frontend.jpg',
      desc: frontendSkills,
    },
    {
      id: 'backend',
      title: 'Backend Experiences',
      icon: backendIcon,
      img: 'https://i.postimg.cc/1Xf4L4Vw/OIP-2.jpg',
      desc: backendSkills,
    },
    {
      id: 'writing',
      title: 'Writing Experiences',
      icon: contentWritingIcon,
      img: 'https://i.postimg.cc/L4cZrBvs/content-writing.png',
      desc: contentWritingSkills,
    },
  ];

  const handleClick = (direction) => {
    direction === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <article className='skills' id='skills'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((info) => (
          <div className='container' key={info.id}>
            <div className='item'>
              <div className='left'>
                <div className='left__container'>
                  <div className='img__container'>
                    <img src={info.icon} alt='frontend' />
                  </div>
                  <h2>{info.title}</h2>
                  <div className='frontend__exp'>
                    {info.desc.map((skill, index) => (
                      <article key={index}>
                        <div className='frontend__exp__item'>
                          <GoVerified />
                          <h4>{skill}</h4>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
              <div className='right'>
                <img src={info.img} alt='frontend_image' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        alt='arrow left'
        className='arrow left'
        onClick={() => handleClick('left')}
      />
      <img
        src={arrow}
        alt='arrow right'
        className='arrow right'
        onClick={() => handleClick('right')}
      />
    </article>
  );
}

export default Skills;
