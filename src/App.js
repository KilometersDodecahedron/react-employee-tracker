//import './App.css';
import React from "react";
import Container from "./components/Container.js"
import Hero from "./components/Hero.js"
import Row from "./components/Row.js"
import SearchForm from "./components/SearchForm.js"

function App() {
  return (
   <div>
    <Container>
      <Hero>
        <h1>Employee Manager</h1>
      </Hero>
      <Row>
         <SearchForm />
      </Row>
    </Container>
   </div>
  );
}

export default App;
