import React from 'react';
import s from './Regalia.module.css';
import regaliaData from '../data/regalia.json';
import RegaliaItem from './RegaliaItem';

export default function Regalia() {
  return (
    <section className={s.regalia}>
      <h2>Регалии</h2>
      <ul>
        {regaliaData.map(regalia => <RegaliaItem regalia={regalia} key={regalia.id} />)}
      </ul>
    </section>
  )
}
