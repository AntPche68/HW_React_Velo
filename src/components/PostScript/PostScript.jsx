import React from 'react'
import s from './PostScript.module.sass'

export default function PostScript() {
  return (
    <div className={s.ps}>
        <p className={s.text}>
            Приехав к нам однажды, 
            многие наши клиенты становятся постоянными, 
            а часть из них даже друзьями. 
            А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
        </p>
    </div>
  )
}
