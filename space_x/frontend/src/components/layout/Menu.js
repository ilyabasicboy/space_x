import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getMenu } from '../../actions/objects';

class Menu extends Component {

    static propTypes = {
        getMenu: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMenu();
    };

    render() {
        return (
            <Fragment>
                <div className="header__menu-wrapper">
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {this.props.menu.map(menuItem => (
                                <li className="menu__item" key={menuItem.id} >
                                    <a href="{menuItem.url}">
                                        <span>
                                            {menuItem.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button className="header__burger burger" type="button">
                        <span className="burger__item">Menu</span>
                    </button>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    menu: state.objects.menu
});

export default connect(mapStateToProps, { getMenu })(Menu);
