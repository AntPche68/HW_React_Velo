import React from 'react'
import s from './Button.module.sass'

export default function ({children, ...props}) {
  return (
    <button {...props} className={s.btn}>
        {children}
    </button>
  )
}
