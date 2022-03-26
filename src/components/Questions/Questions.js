import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <h1 className='main-question-header'>Frequently Asked Questions</h1>
            <div className='all-questions'>
                <div className='questions'>
                    <div>
                        <h2>How does React works?</h2>
                        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. React uses JSX or JavaScript XML that looks like a mixture of JavaScript and HTML, but it's actually JSX being compiled into JavaScript using babel. Important reusable UI called Components are used to create multiple similar in look, different in data multiple times using just one component. Virtual DOM is used for a greater performance. V.DOM is used to keep record of code. It can spot any change of a code and can change only that part of the code for faster performance.</p>
                    </div>
                    <div>
                        <h2>Props vs State</h2>
                        <p>Props are used to pass data from from one component to another component. While state is a local storage, that is local to the component and cannot be passed to other components. Props are read only, while state can be asynchronous. Props cannot be modified, while state can be modified using this.setState. Props are immutable, while state are mutable. Props has batter performance, while state has bad performance.</p>
                    </div>
                    <div>
                        <h2>How useState() works?</h2>
                        <p>useState() is a special function that lets us have state variables in functional components. useState() returns a stateful value, and a function to update it. The setState function is used to update the state. Functional component can be used to keep track of state and can update it. The useState() function uses useReducer and it simply provides it with a pre-defined reducer handler. Meaning that the results returned by useState() are a reducer state. This is how useState() actually works.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;