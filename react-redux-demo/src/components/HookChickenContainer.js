import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChicken } from '../redux/chicken/chickenActions'

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Num of Hook Chickens - {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </>
    )
}

export default HookChickenContainer