import React from 'react'
import MainPic from './MainPic.png'
import s from './Main.module.sass'

export default function Main() {
  return (
    <section className={s.main}>
        <div className={s.text}>
            <h2>
                Что мы предлагаем
            </h2>
            <p>
                В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, 
                ремонт и настройку всех его узлов, шиномонтажные работы. 
                Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  
                Все работы выполняем качественно и с душой. 
            </p>
        </div>
        <img src={MainPic} alt="bicycle" />
    </section>
  )
}
