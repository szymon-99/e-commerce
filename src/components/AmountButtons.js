import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, decrease, increase, alert }) => {
  // return (
  //     <Wrapper className='amount-btns'>
  //       <button type='button' className='amount-btn' onClick={decrease}>
  //         <FaMinus />
  //       </button>
  //       <h2>{amount}</h2>
  //       <button type='button' className='amount-btn' onClick={increase}>
  //         <FaPlus />
  //       </button>
  //     </Wrapper>
  // );
  return (
    <Wrapper>
      <div className='amount-btns'>
        <button type='button' className='amount-btn' onClick={decrease}>
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button type='button' className='amount-btn' onClick={increase}>
          <FaPlus />
        </button>
      </div>
      {alert ? <p>No more items in stock</p> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  .amount-btns {
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    color: red;
    margin-left: 2rem;
    transform: translateY(50%);
    line-height: 0;
  }
`;

export default AmountButtons;
