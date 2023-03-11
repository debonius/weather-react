'use strict';

export default function Search() {

  return (
    <form id="form" action="">
        <input id="input-city" list="results" type="text" placeholder="search City" aria-label="form"/>
        <input id="btn" type="submit" hidden/>
    </form>
  );

}

const rootNode = document.getElementById('search');
const root = ReactDOM.createRoot(rootNode);
root.render(<Search />);