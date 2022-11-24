import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
// you're going to use curly brackets in an import statement if
// the thing you're importing has not been exported as default

function App() {
  return (
    <div>
      {/* props names can be anything; but if the value is anything else
      than a string, you have to delimit it with {} */}
      <CustomNavbar subtitle="Best pastas on the Internet!" />
      {/* I'm likely to invoke Home here later */}
      <Home />
    </div>
  )
}

export default App
