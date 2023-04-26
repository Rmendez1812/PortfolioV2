import React from 'react';
//import Proj001 from '../../images/quiz-master-max.png';//
//import Proj002 from '../../images/animanga-portfolio.png';//

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quiz Master Max",
      //image: Proj001,
      description: "A quiz app that allows users to take quizzes on a variety of programming topics.",
      link: 'https://quizmax.herokuapp.com/login',
      github: 'https://github.com/chrisjg19/QuizMasterMax5000'
    },
    {
      id: 2,
      title: "CityBikes",
      //image: Proj002,
      description: "A search engine for anime and manga. Users can search for anime and manga and view details about them.",
      link: 'http://lemondropping.github.io/city-bike-proj/',
      github: 'https://github.com/LemonDropping/city-bike-proj'
    },
  ];

  return (
    <section className='container'>
      <h2 className='mb-5 text-center'>Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map(({ id, title, image, description, link, github }) => (
          <div className="col" key={id}>
            <div className="card h-100">
              <img src={image} alt={title} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <div className="d-grid gap-2 buttons">
                  <a href={link} target="_blank" rel="noreferrer" className='proj-btn'>Demo</a>
                  <a href={github} target="_blank" rel="noreferrer" className='proj-btn'>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}