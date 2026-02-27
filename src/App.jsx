import Header from './components/Header'
import Nav from './components/Navigation'
import NewsContainer from './components/NewsContainer'
import InternationalNews from './components/InternationaContainer';


function App() {
  return (
    <>
       
      <Header title="News for Today" />
      <Nav />
      <NewsContainer />
      <InternationalNews />
      
    </>
  )
}

export default App