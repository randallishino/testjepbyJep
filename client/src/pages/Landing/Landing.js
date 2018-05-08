import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import video from "../../compressed.mp4";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import whitelogo from "../../images/logowhite.png";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: video
        }
    }

    render() {
        return (
            <Wrapper>

                <div className="title_jbj">
                    <NavLink to="/home" className="grow" id="title"><img class="logo2" src={whitelogo}></img></NavLink>
                </div>

                <video id="myVideo" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4" />
                </video>


            </Wrapper>

        )
    }
};

export default Landing;