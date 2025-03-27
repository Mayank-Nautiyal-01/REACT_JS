import Home from './Context_Api/Home'
import { BioProvider } from './Context_Api/Index'

function App() {
  return (
    <BioProvider>
    <Home/>
    </BioProvider>
  )
}

export default App