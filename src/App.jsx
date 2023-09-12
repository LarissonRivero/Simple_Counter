import React from "react";
import ReactDOM from "react-dom";
import { FaClock } from 'react-icons/fa';
import "./index.css";

    export default function Counter(props) {
        return (
            <div className="container">
                <span>Simple Counter:</span>
                <div className="counter">
                    <div className="number">
                        <i className="far fa-clock"><FaClock /></i>
                    </div>
                    <div className="number">{props.digitFour % 10}</div>
                    <div className="number">{props.digitThree % 10}</div>
                    <div className="number">{props.digitTwo % 10}</div>
                    <div className="number">{props.digitOne % 10}</div>
                </div>
            </div>
        );
        }

        let counter = 0;
        setInterval(function () {
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter / 1);

        console.log(four, three, two, one);

        counter++;
        ReactDOM.render(
            <Counter
            digitFour={four}
            digitThree={three}
            digitTwo={two}
            digitOne={one}
            />,
            document.querySelector("#root")
        );
        }, 1000);
        ReactDOM.render(<Counter />, rootElement);

