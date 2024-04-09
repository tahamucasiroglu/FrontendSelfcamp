import 'bulma/css/bulma.css'
import './App.css'
import  Course  from './Course'
import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <div className='columns'>
          <Course image={Angular} title="Angular" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente fugit tempore officia optio dolore inventore quod similique laborum labore, eum ipsam at nam suscipit ut voluptates sit quae in veritatis?"/>
        </div>
        <div className='columns'>
          <Course image={Kompleweb} title="Frontend" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente fugit tempore officia optio dolore inventore quod similique laborum labore, eum ipsam at nam suscipit ut voluptates sit quae in veritatis?"/>
        </div>
        <div className='columns'>
          <Course image={Ccsharp} title="Komple Web" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente fugit tempore officia optio dolore inventore quod similique laborum labore, eum ipsam at nam suscipit ut voluptates sit quae in veritatis?"/>
        </div>
        <div className='columns'>
          <Course image={Bootstrap5} title="Bootstrap 5" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente fugit tempore officia optio dolore inventore quod similique laborum labore, eum ipsam at nam suscipit ut voluptates sit quae in veritatis?"/>
        </div>
      </div>
    </div>
  )
}

export default App
