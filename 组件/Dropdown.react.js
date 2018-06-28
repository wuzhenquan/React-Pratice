import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class FilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.updateDropdownVisible = this.updateDropdownVisible.bind(this);
        this.dropdownContainer = null;
        this.Dropdown = ({ position }) => {
            console.log(this.state.visible, 'this.state.visible')
            return (
                <div className="drop-down" style={{ position }}>
                    
                </div>
            );
        };
    }

    componentWillUnmount() {
        if (this.dropdownContainer && this.dropdownContainer.parentNode) this.dropdownContainer.parentNode.removeChild(this.dropdownContainer);
    }

    updateDropdownVisible() {
        this.setState((prevState) => {
            return { visible: !prevState.visible };
        });
    }

    open(e) {
        console.log(e,'e')
        const position = {
            left: e.target.getBoundingClientRect().left,
            top: e.target.getBoundingClientRect().top
        };
        this.dropdownContainer = document.createElement('div');
        document.body.appendChild(this.dropdownContainer);
        ReactDOM.render(this.Dropdown({ position }), this.dropdownContainer);
    }

    close() {
        ReactDOM.unmountComponentAtNode(this.dropdownContainer);
        this.dropdownContainer.parentNode.removeChild(this.dropdownContainer);
    }

    render() {
        return (
            <span
                onClick={(e) => {
                    if (this.state.visible) { this.close(); } else { this.open(e); }
                    this.setState((prevState) => { return { visible: !prevState.visible }; });
                }}
            >
                {this.props.children}
            </span>
        );
    }
}

FilterDropdown.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

export default FilterDropdown;
