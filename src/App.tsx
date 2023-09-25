import './index.css'
import Debounce from './examples/Debounce'
import Transition from './examples/Transition'
import NoTransition from './examples/NoTransition'

export default function App() {
  return (
    <div className="App">
      <h1>Debounce vs useTransition</h1>

      <div className="grid">
        <Debounce />
        <Transition />
        <NoTransition />
      </div>
    </div>
  )
}
