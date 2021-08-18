import React, { useState } from "react";
import { GlobalStyle, AppDiv } from "./App.style";
import Header from "./components/Header";
import Title from "./components/Title";
import Generator from "./components/Generator";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const handleImageUrl = (url: string) => {
    setImageUrl(url);
  };

  const [warning, setWarning] = useState("");
  const handleWarning = (content: string) => {
    setWarning(content);
  };

  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Header />
        <Title />
        <Generator
          handleImageUrl={handleImageUrl}
          imageUrl={imageUrl}
          handleWarning={handleWarning}
        />
        <Result
          imageUrl={imageUrl}
          warning={warning}
          handleWarning={handleWarning}
        />
      </AppDiv>
      <Footer />
    </>
  );
}

export default App;
