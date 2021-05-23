import React from 'react';
import PropTypes from 'prop-types';
import s from './WorksItem.module.css';

function WorksItem({work}) {
  return (
    <li className={s.works_item}>

      <div className={s.preview_block}>
      <picture>
        <source media="(min-width: 800px)" srcSet={work.previews[0]} />
        <source media="(min-width: 426px) and (max-width: 799px)" srcSet={work.previews[1]} />
        <img src={work.previews[0]} alt={work.name} />
      </picture>
        <div className={s.links_block}>
          <a className="button" href={work.url.work} target="_blank" rel="noreferrer">Посмотреть работу</a>
          <a className="button" href={work.url.source} target="_blank" rel="noreferrer">Исходный код</a>
        </div>
      </div>

      <table className={s.works_info}>
        <caption>{work.name}</caption>
        <tbody>
          <tr>
            <th>Описание</th>
            <td>{work.description}</td>
          </tr>
          <tr>
            <th>Год</th>
            <td>{work.year}</td>
          </tr>
          <tr>
            <th>Стек</th>
            <td>{work.stack}</td>
          </tr>
          <tr>
            <th>Адаптивность</th>
            <td>
              <ul className={s.adaptability_list}>
                <li 
                  className={work.adaptability.mobile ? `${s.mobile_enabled}` : `${s.mobile_disabled}`}
                  title="Мобильный"
                >
                  <span className="visually-hidden">Мобильный</span>
                </li>
                <li
                  className={work.adaptability.tablet ? `${s.tablet_enabled}` : `${s.tablet_disabled}`}
                  title="Планшет"
                >
                  <span className="visually-hidden">Планшет</span>
                </li>
                <li
                  className={work.adaptability.desktop ? `${s.desktop_enabled}` : `${s.desktop_disabled}`}
                  title="Компьютер"
                >
                  <span className="visually-hidden">Компьютер</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Ретинизация</th>
            <td>{work.retinization}</td>
          </tr>
        </tbody>
      </table>

    </li>
  )
}

WorksItem.propTypes = {
  work: PropTypes.object.isRequired,
}

export default WorksItem

