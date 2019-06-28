import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';
import Average from './Average';

const ViewInfo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={ () => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info />}
    </div>
  );
}

const ViewContextSample = () => {
  return (
    <ContextSample/>
  );
}

const ViewCounter = () => {
  return (
    <Counter />
  );
}

function App() {
  return(
    <Average/>
  );
}

export default App;
