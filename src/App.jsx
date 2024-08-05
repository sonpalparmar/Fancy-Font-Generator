import { useState } from "react";
import "./App.scss";
import BodyContainer, { PreviewBtn } from "./components/BodyContainer";
import FontDescription from "./components/FontDescription";
import FontUses from "./components/FontUses";

function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const filterText = [
    "Fancy",
    "Pretty",
    "Glitch",
    "Small",
    "Twitter",
    "Cursed",
    "Instagram",
    "Bold",
    "Cursive",
    "Italic",
    "Tiny",
  ];

  return (
    <div>
      <BodyContainer
        isPreview={isPreview}
        setIsPreview={setIsPreview}
        clickedIndex={clickedIndex}
        setClickedIndex={setClickedIndex}
      />
      {!isPreview && <FontDescription filterText={filterText[clickedIndex]} />}
      {!isPreview && <FontUses filterText={filterText[clickedIndex]} />}
      <PreviewBtn isPreview={isPreview} setIsPreview={setIsPreview} />
    </div>
  );
}

export default App;
