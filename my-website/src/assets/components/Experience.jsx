import React from 'react';
import KotlinLogo from '../portfolio/KotlinLogo.png';
import JavaLogo from '../portfolio/JavaLogo.png';
import html from '../portfolio/html.png';
import css from '../portfolio/css.png';
import javascript from '../portfolio/javascript.png';
import tailwind from '../portfolio/tailwind.png';
import react from '../portfolio/react.png';
import ReduxLogo from '../portfolio/ReduxLogo.png';
import node from '../portfolio/node.png';
import ExpressJsLogo from '../portfolio/ExpressJsLogo.png';
import PostgreSQLLogo from '../portfolio/PostgreSQLLogo.png';
import github from '../portfolio/github.png';

const Experience = () => {
  const techs = [
    { id: 1, src: KotlinLogo, title: 'Kotlin', style: 'shadow-blue-900 via-orange-400 to-red-200' },
    { id: 2, src: JavaLogo, title: 'Java', style: 'shadow-red-700 to-orange 600' },
    { id: 3, src: html, title: 'HTML', style: 'shadow-red-700 to-orange 600' },
    { id: 4, src: css, title: 'CSS', style: 'shadow-blue-400 via-blue-600 to-blue-800' },
    { id: 5, src: javascript, title: 'Javascript', style: 'shadow-yellow-400 via-yellow-500' },
    { id: 6, src: tailwind, title: 'Tailwind', style: 'shadow-blue-900' },
    { id: 7, src: react, title: 'React', style: 'shadow-blue-500' },
    { id: 8, src: ReduxLogo, title: 'Redux', style: 'shadow-purple-600' },
    { id: 9, src: node, title: 'NodeJs', style: 'shadow-green-500' },
    { id: 10, src: ExpressJsLogo, title: 'ExpressJS', style: 'shadow-gray-300' },
    { id: 11, src: PostgreSQLLogo, title: 'PostgreSQL', style: 'shadow-blue-700' },
    { id: 12, src: github, title: 'GitHub', style: 'shadow-white' },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience:</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-24 mx-auto mb-2" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
