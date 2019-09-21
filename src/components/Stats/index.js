import React from 'react';
import './styles.scss';

const Stats = ({ stats }) => {
  if(!stats){
    //loading not yet started
    return <span className="stats">Loading...</span>;
  }
  return(
    <span className="stats">
      {stats.error && '🤯 Error!'}
      {stats.isLoading && '🙄 Loading...'}
      {stats.download !== null && `🤘 ${stats.download}`}
    </span>
  );
};

export default Stats;
