import React from 'react'
import Service from '../Service/Service'
import s from './Services.module.sass'

export default function Services() {
    const service_list = [
        {
            id: 1,
            title: 'Годовое ТО',
            background: '#22356F'
        },
        {
            id: 2,
            title: 'Выравнивание колес',
            background: '#0052C1'
        },
        {
            id: 3,
            title: 'Настройка переключателей',
            background: '#76B58B'
        }    
    ]
  return (
      <div className={s.services}>
          {service_list.map((t) => 
          <Service key={t.id} {...t}/> )}
      </div>
  )
}
