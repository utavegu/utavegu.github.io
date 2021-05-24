import React from 'react';
import PropTypes from 'prop-types';
import s from './RegaliaItem.module.css';

function RegaliaItem({regalia}) {
  return (
    <li className={s.regalia_item}>
      <h3>{regalia.name}</h3>
      <a href={regalia.url} target="_blank" rel="noreferrer">
        <img src={regalia.preview} alt={regalia.name} />
      </a>
    </li>
  )
}

RegaliaItem.propTypes = {
  regalia: PropTypes.object.isRequired,
}

export default RegaliaItem

