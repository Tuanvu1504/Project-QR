import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
const data = [
  {
    id: uuidv4(),
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
    widthImg: 20,
    name: 'Java',
    price: 1000,
  },
  {
    id: uuidv4(),
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png',
    widthImg: 40,
    name: 'React',
    price: 2000,
  },
  {
    id: uuidv4(),
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    widthImg: 60,
    name: 'Nodejs',
    price: 3000,
  },
  {
    id: uuidv4(),
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    widthImg: 35,
    name: 'Angular',
    price: 10000,
  },
];

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [dataCourse, setDataCourse] = useState(data);
  const [priceQR, setPriceQR] = useState(0);
  const [descriptionQR, setDescriptionQR] = useState('');

  const handleQRCheck = (course) => {
    setDescriptionQR(course.name);
    setPriceQR(course.price);
  };
  const contextValue = {
    dataCourse: dataCourse,
    handleQRCheck: handleQRCheck,
    priceQR: priceQR,
    descriptionQR: descriptionQR,
  };
  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};
