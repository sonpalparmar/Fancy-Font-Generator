import step1 from "../assets/Step 1.png";
import step2 from "../assets/Step 2.png";
import step3 from "../assets/Step 3.png";
import "./FontDescription.scss";

const FontDescription = ({ clickedFont, setClickedFont, filterText }) => {
  const steps = [
    {
      images: [step1],
      title: "Enter your text in text field",
      description:
        `Enter your text into Fontsvilla ${filterText} text generator to generate cool and fancy fonts.`,
    },
    {
      images: [step1, step2],
      title: "Choose a font style",
      description:
        `Scroll through an extensive list of combinations and select a ${filterText} font type that resonates with your vision.`,
    },
    {
      images: [step3],
      title: "Copy and Paste the font",
      description:
        "Once you find the perfect font for you, copy and paste it across Facebook, Instagram, Twitter, or any desired platform.",
    },
  ];
  return (
    <div className="desc-contaienr">
      <h2>How to use Fontsvills {filterText} Text Generator?</h2>
      <div className="step-container">
        {steps.map((step, index) => (
          <div key={index} className={`step${index + 1}`}>
            <div className="step-img">
              {step.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Step ${index + 1} Image ${i + 1}`}
                />
              ))}
            </div>
            <p id="step">Step {index + 1}</p>
            <span>{step.title}</span>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontDescription;
