import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ToggleButton, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class FollowProject extends Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }
    changeState() {
        this.setState({ state: !this.state.active });
    }

    render() {
        let btn_state = this.state.active ? "success" : "outline-success";
        let btn_text = this.state.active ? "FOLLOWING" : "FOLLOW PROJECT";

        return (
            <div>
                <Button block onClick={this.changeState.bind(this)} variant={btn_state}>{btn_text}</Button>
            </div>
        );
}
}

export default FollowProject;
