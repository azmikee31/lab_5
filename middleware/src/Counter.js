import React from 'react';
import { connect } from "react-redux";
import { increment, decrement, reset } from './actions';

function Counter({ count, dispatch}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);