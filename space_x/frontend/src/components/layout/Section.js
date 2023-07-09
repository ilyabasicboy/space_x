import React, { Fragment } from 'react';
import Advantages from './Advantages';

export default function Section() {
    return (
        <Fragment>
            <div className="section">
                <div className="container">
                    <div className="section__block">
                        <div className="section__content">
                            <div className="section__title">
                                <h1 className="title">
                                    Путешествие
                                </h1>
                                <h2 className="subtitle">
                                    на красную планету
                                </h2>
                            </div>
                            <div className="start__travel">
                                <button className="btn">
                                    Начать путешествие
                                </button>
                            </div>
                        </div>
                        <Advantages />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
