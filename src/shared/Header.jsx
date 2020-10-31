import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import style from './header.css'


function HeaderComponent() {
    return (
        <header>
            <h1 className={style.example}>Reddit</h1>
            <h2 className={style.example1}>В чем ошибка????</h2>
            <h3>Вношу изменения</h3>
        </header>
    );
}

export const Header = hot(HeaderComponent);