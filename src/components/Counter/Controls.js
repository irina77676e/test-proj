import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter_ _controls">
    <button type="button" onClick={onIncrement}>
      Plus one
    </button>
    <button type="button" onClick={onDecrement}>
      Minus one
    </button>
  </div>
);

export default Controls;
