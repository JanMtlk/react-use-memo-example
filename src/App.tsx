import React, { useMemo } from 'react';

function App() {
  const [refreshCounter, setRefreshCounter] = React.useState(1);
  //use memo example
  const count = useMemo(() => {
    console.log('useMemo called');
    for (let i = 0; i < 2000000000; i++) {
      // simulate expensive operation
    }
    return 1;
  }, []);

  const countWithoutMemo = () => {
    console.log('no memo called');
    for (let i = 0; i < 2000000000; i++) {
      // simulate expensive operation
    }
    return 1;
  }
  //! we can see, that the operation 
  return (
    <div className="App">
      {count}, 
      {countWithoutMemo()}
      <button onClick={() => setRefreshCounter(refreshCounter + 1)}>
        Refresh
      </button>
    </div>
  );
}

export default App;
