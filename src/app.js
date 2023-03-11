'use strict';

function App() {
  return (
    <Search />
  );
}

const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);