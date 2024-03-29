import React from 'react';
import './styles.scss';

const Button = ({ children, loading, ...props}) => (
  <button className="button" disabled={loading} {...props}> 
    {loading ? 'loading...':children}
  </button>
)

Button.defaultProps = {
  loading:false,
}

export default Button;
