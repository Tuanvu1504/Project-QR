import React from 'react';
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContent';
export default function ListItemCourse() {
  const { dataCourse, handleQRCheck } = useContext(CourseContext);
  return (
    <>
      <div className='container'>
        {dataCourse &&
          dataCourse.map((course) => (
            <div key={course.id} className='card-item' onClick={()=>handleQRCheck(course)}>
              <div className='logo-card'>
                <img
                  src={course.imgSrc}
                  alt='no picture'
                  width={course.widthImg}
                />
              </div>
              <span className='card-title'>{course.name}</span>
              <span className='card-price'>
                {course.price.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </span>
            </div>
          ))}
      </div>
    </>
  );
}
