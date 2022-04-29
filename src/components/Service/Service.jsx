import React from 'react'
import Button from '../UI/Button'
import s from './Service.module.sass'


export default function Service({id, title, background}) {
  return (
    <div className={s.service} style={{backgroundColor: background}}>
        <p>{title}</p>
      <Button> Подробнее </Button>
    </div>
  )
}
