import React from 'react';
import contact from '../config/contact';
import Link from 'next/link'

import './style.scss';

const Sidebar = () => {

  const urlify = (text) => {
    if (!text) {
      return text;
    }
    const regex = /\n/gi;
    text = text.replace(regex, '<br />');
    return text;
  };

  return (
    <header className='Header__container' >

      <>
        <Link href={'/'} ><a><h1>Tuấn Nguyễn Blog</h1></a></Link>
        <span className='Header__container--subName'>By Nguyễn Đức Linh Tuấn</span> <br />
        <span className='Header__container--subName'>Contact: tuan2887903@gmail.com</span>

        <div
          className='Header__container--note'
          dangerouslySetInnerHTML={{
            __html: urlify(contact)
          }}
        />
      </>

    </header>
  );
};

export default Sidebar;