import React from 'react'
import style from './Loading.scss'

export const Loading = () => (
  <div className={style.spinner}>
    <div className={style.rect1}></div>
    <div className={style.rect2}></div>
    <div className={style.rect3}></div>
    <div className={style.rect4}></div>
    <div className={style.rect5}></div>
  </div>
)

export default Loading
