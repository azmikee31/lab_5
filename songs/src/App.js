import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '20px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <h2>Song List</h2>
          <SongList />
        </div>
        <div className="column eight wide">
          <h2>Song Detail</h2>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
