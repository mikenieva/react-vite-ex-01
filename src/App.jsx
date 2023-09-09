import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

function App() {

  const metadata = {
    title: "Mi primer app en React",
    subtitle: "Este es un párrafo"
  }

  return (
    <>
      <Header title={metadata.title} subtitle={metadata.subtitle} />
      <p>
        Hola mundo
      </p>
      <Content />
      <Footer />
    </>
  )
}

export default App
