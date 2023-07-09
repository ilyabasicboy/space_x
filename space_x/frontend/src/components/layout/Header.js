import React, { Fragment } from 'react';
import Menu from './Menu';

export default function Header() {
    return (
        <Fragment>
            <header className="header sticky">
                <div className="container">
                    <div className="header__block">
                        <div className="header__logo">
                            <a href="/">
                                <span></span>
                                <img src="/static/img/logo.png" />
                            </a>
                        </div>
                        <Menu />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
