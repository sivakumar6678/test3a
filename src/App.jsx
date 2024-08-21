import './App.css';
import ClassBased from './components/class-based';
// import FunctionalBased from './components/functional-based';
import Productlist from './components/Products';
const dummydata = [1,2,3,4,5]
function App() {

  return(
    <div>
        <ClassBased />
        {/* <FunctionalBased /> */}

        {/* <Productlist a={dummydata} /> */}
    </div>
  )
}

export default App;
