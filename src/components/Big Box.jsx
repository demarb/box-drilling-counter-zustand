import SmallBox from './Small Box'
import { useCounterStore } from '../store'

export default function BigBox(){

    const counter = useCounterStore(state => state.counter)
    const level2_increment = useCounterStore(state => state.level2_increment)
    const level2_decrement = useCounterStore(state => state.level2_decrement)


    return (
        <section className="big-box">
            <h2>Big Box</h2>

            <div className="counter-grp">
                <button onClick={level2_decrement}>
                    - 
                </button>
                
                    <p>{counter.level2}</p>

                <button onClick={level2_increment}>
                    +
                </button>
            </div>

            <SmallBox />
        </section>
    )
    }
