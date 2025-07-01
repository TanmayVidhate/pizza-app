import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";

let App = () => {
  return (
    <>
      <div className="container">
        <h1>This is App Components ✋</h1>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export {
  App
}