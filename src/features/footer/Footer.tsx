'use client'

import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className='flex bg-custom-gradient'>
      <div className={styles['conteiner__footer']}>
        <section className={styles['content__1']}>
          <div className={styles['footer__header-wrap']}>
            <h2 className={styles['content__title']}>Покупателям</h2>
          </div>
          <div className={styles['content__title']}><a>Как совершdить покупку</a></div>
          <div className={styles['content__title']}><a href="../page/dostavka.php">Достака</a></div>
          <div className={styles['content__title']}><a>Есть ли рассрочка</a></div>
          <div className={styles['content__title']}><a>Возврат</a></div>
        </section>

        <section className={styles['content__1']}>
          <div className={styles['footer__header-wrap']}>
            <h2 className={styles['content__title']}>Компания</h2>
          </div>
          <div className={styles['content__title']}><a>О нас</a></div>
          <div className={styles['content__title']}><a>Где мы офлайн</a></div>
          <div className={styles['content__title']}><a>Контакты</a></div>
          <div className={styles['content__title']}><a>Реквезиты</a></div>
        </section>

        <section className={styles['content__1']}>
          <div className={styles['footer__header-wrap']}>
            <h2 className={styles['content__title']}>Наши соц.сети</h2>
          </div>
          <div className={styles['content__title']}><a>Telegram</a></div>
          <div className={styles['content__title']}><a>Группа ВКонтакте</a></div>
          <div className={styles['content__title']}><a>YouTube</a></div>
          <div className={styles['content__title']}><a>Instagram</a></div>
        </section>
      </div>
    </footer>
  )
}
