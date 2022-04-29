import React from 'react'
import Button from '../UI/Button'
import s from './Header.module.sass'
import logo from './logo.png'

export default function Header() {
  return (
    <nav>
        <a href="#">
            <img src={logo} alt="Logo" />
        </a>
        <ul>
            <li>
                <a href="#">О нас</a>
            </li>
            <li>
                <a href="#">Услуги</a>
            </li>
            <li>
                <a href="#">Аренда</a>
            </li>
        </ul>
        <Button>Связаться</Button>
    </nav>
  )
}
