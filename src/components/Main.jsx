import BigBox from './Big Box'
import { useCounterStore } from '../store'

export default function Main(){

    const counter = useCounterStore(state => state.counter)
    const level1_increment = useCounterStore(state => state.level1_increment)
    const level1_decrement = useCounterStore(state => state.level1_decrement)

    return (
        <section className="main">

                <h1>Main</h1>
                
                <div className="counter-grp">
                    <button onClick={level1_decrement}>
                        - 
                    </button>

                        <p>{counter.level1}</p>

                    <button onClick={level1_increment}>
                        +
                    </button>
                </div>
                


                <BigBox />

        </section>
        
    )
}