import {useState} from 'react';
import '../style/membershipStyle.css';

export const MembershipItem = ({ id, name, description, grade, price }) => {


  return (
    <div key={id} className='card card-body square'>
      <div className="mt-2 h4">{name}</div>
      <p>{description}</p>
      <p className="grade">{grade}</p>
      <p className="price">${price}</p>
    </div>
  );
}
