import React from 'react';
import s from './Works.module.css';
import worksData from '../data/works.json';
import WorksItem from './WorksItem';

export default function Works() {
  return (
    <section className={s.works}>
      <h2>Работы</h2>
      <ul className={s.works_list}>
        {worksData.map(work => <WorksItem work={work} key={work.id} />)}
      </ul>
    </section>
  )
}
