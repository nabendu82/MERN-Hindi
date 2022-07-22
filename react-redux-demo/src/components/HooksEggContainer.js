import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const HooksEggContainer = () => {
    const numOfEggs = useSelector(state => state.egg.numOfEggs)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Num of Hook Eggs - {numOfEggs}</h2>
            <button onClick={() => dispatch(buyEgg())}>Buy Hook Egg</button>
        </>
    )
}

export default HooksEggContainer