import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div className='accordion_item'>
        <div onClick={onClick} style={{ cursor: 'pointer' }} className="accordion_title">
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span class="accordion_arrow_down" role="presentation"></span>}
            {isOpen && <span class="accordion_arrow_up" role="presentation"></span>}
          </div>
        </div>
        {isOpen && (
          <div className='accordion_body'>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;