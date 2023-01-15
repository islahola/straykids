import React from 'react';

const CardMv = (props) => {
  return (
    <div class="card card-mv pt-3">
      <img src={props.logo}  alt={props.title}/>
      <div class="card-body">
      <h5>{props.title}</h5>
    </div>
    </div>
  );
}

export default CardMv;
