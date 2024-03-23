import React from 'react';
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContent';
const QRInit = {
    BANK_ID: 'TPBank',
    ACCOUNT_NO: '0986000154',
    TEMPLATE:'compact2'
}
export default function QRItem() {
    const { priceQR, descriptionQR } = useContext(CourseContext) 
  return (
    <>
      <div className='QR-container'>
        <img
          src={`https://img.vietqr.io/image/${QRInit.BANK_ID}-${QRInit.ACCOUNT_NO}-${QRInit.TEMPLATE}.jpg?amount=${priceQR}&addInfo=Phi khoa hoc ${descriptionQR}&accountName=VU ANH TUAN`}
          alt='no QR-code picture'
          width={350}
        />
      </div>
    </>
  );
}
