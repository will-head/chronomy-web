import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class PlaylistHeader extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    uuid: this.props.uuid,
    redirect: null,
  };

  delete = () => {
    //API Request to delete
  };

  edit = () => {
    this.setState({
      redirect: "/editPlaylist/" + this.state.uuid,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else
      return (
        <div className="playlistHeader">
          <h4 className="title">{this.state.title}</h4>
          <h5 className="uuid">UUID: {this.state.uuid}</h5>
          <button className="button" onClick={this.delete}>
            Delete
          </button>
          <button className="button" onClick={this.edit}>
            Edit
          </button>
        </div>
      );
  }
}

export default PlaylistHeader;
