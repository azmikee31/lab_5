// components/SongDetail.js
import React from "react";
import { connect } from "react-redux";
import '../styles.css'; // Import styles.css

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div className="ui segment song-detail">
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
