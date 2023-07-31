import { useCounterStore } from '../store'

export default function SmallBox(){


    const counter = useCounterStore(state => state.counter)
    const level3_increment = useCounterStore(state => state.level3_increment)
    const level3_decrement = useCounterStore(state => state.level3_decrement)


    return (
        <section className="small-box">
            <h3>Small Box</h3>
            
            <div className="counter-grp">
                <button onClick={level3_decrement}>
                    - 
                </button>
                
                    <p>{counter.level3}</p>

                <button onClick={level3_increment}>
                    +
                </button>
            </div>

        </section>
    )
}