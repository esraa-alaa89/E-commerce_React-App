/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import HomeStyle from '../Home/Home.module.css';

export default function HomeTitle({date, title}) {
    return <>
        <div className={`${HomeStyle.homeTitle} pt-5`}>
            <h6>{date}</h6>
            <p>{title}</p>
        </div>
    </>
}
