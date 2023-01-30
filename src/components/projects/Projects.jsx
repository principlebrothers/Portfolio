import { useState, useEffect } from 'react';
import ProjectsList from '../projectsList/ProjectsList';
import './Projects.scss';
import { subHeader } from './projectsUtilities';
import {
  featuredData,
  mobileData,
  webData,
  articleData,
} from './projectsData';

function Projects() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredData);
        break;
      case 'web_app':
        setData(webData);
        break;
      case 'mobile_app':
        setData(mobileData);
        break;
      case 'articles':
        setData(articleData);
        break;
      default:
        setData(featuredData);
    }
  }, [selected]);

  return (
    <article className='projects' id='projects'>
      <h1>Projects</h1>
      <ul>
        {subHeader.map((list) => (
          <ProjectsList
            key={list.id}
            title={list.title}
            active={selected === list.id}
            setSelected={setSelected}
            id={list.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((detail) => (
          <div className='project__items' key={detail.id}>
            <img src={detail.image} alt={detail.title} />
            <h3>{detail.title}</h3>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Projects;
