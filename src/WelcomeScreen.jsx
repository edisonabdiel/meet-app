import React from "react";
import '../src/WelcomeScreen.css';
// Icon
import { FcGoogle } from "react-icons/fc"

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <h1>Welcome to the MeetApp for Coding Events</h1>
                <h4>
                    Log in to see upcoming events around the world for full-stack developers
                </h4>
                <div className="button_cont" align="center">
                    <div class="google-btn">
                        <div class="google-icon-wrapper">
                            <FcGoogle size="2.4rem" />
                        </div>
                        <button onClick={() => { props.getAccessToken() }}
                            rel="nofollow noopener"
                            class="btn-text">
                            <b>Sign in with google</b>
                        </button>
                    </div>
                </div>
                <a
                    href="https://edisonabdiel.github.io/meet-app/privacy.html"
                    rel="nofollow noopener">
                    Privacy policy
                </a>
            </div>
        )
        : null
}
export default WelcomeScreen;