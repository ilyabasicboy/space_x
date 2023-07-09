import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAdvantages } from '../../actions/objects';

class Advantages extends Component {

    static propTypes = {
        getAdvantages: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getAdvantages();
    };

    render() {
        return (
            <Fragment>
                <div className="section__advantages">
                    <ul className="section__advantages-list">
                        {this.props.advantages.map(advantage => (
                            <li className="advantage" key={advantage.id}>
                                <span className="top_subtitle">
                                    {advantage.top_subtitle}
                                </span>
                                <span className="title">
                                    {advantage.title}
                                </span>
                                <span className="bottom_subtitle">
                                    {advantage.bottom_subtitle}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    advantages: state.objects.advantages
});

export default connect(mapStateToProps, { getAdvantages })(Advantages);
