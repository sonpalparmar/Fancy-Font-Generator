import "./FontUses.scss";
import message from "../assets/messages.png";
import game from "../assets/game.png";
import arts from "../assets/arts.png";
import document from "../assets/document.png";
const FontUses = ({ filterText }) => {
  const projects = [
    {
      title: "Social Media",
      subtitle: "Stand Out in Style: Carving Your Social Footprint",
      description:
        "Kick up your social media game a notch with some edge and freshness. Whatever your social media platform: LinkedIn bios, Instagram posts that draw attention or Facebook updates that keep people interested, our range of fonts is varied enough to add personality and charm to your internet identity. From headline to fashion bio, you can express your special look through your social profiles with our choice of fonts. Be remembered with a statement that captures the attention and with every scroll.",
      imgSrc: `${message}`,
      cardColor: "projcard-blue",
    },
    {
      title: "Games",
      subtitle: "Gaming has to be personal! Turn on your style!",
      description:
        "Use a font that suits your gaming taste and create an online self. No matter the games you play, whether you're an explorer, building empires or winning leaderboards, our fonts will add personality and flair to your gaming experience. Distinct nicknames, bold bios, we provide you many fonts to make your gaming personality one of a kind! Become a recognizable gamer and surpass your rivals, peaking everyone's consciousness.",
      imgSrc: `${game}`,
      cardColor: "projcard-red",
    },
    {
      title: "Arts",
      subtitle: "Fuel Your Creative Fire: Where Imagination Meets Typography",
      description:
        "Stimulate your creativity with fonts that are both intriguing and inspiring. Are you a professional designer or a kid who just wants to play around, we have a style for you. From professional projects to personal objectives whatever the type of project, by means of the fonts you will give the necessary zest of creation to your work. Show off your artistic works to the world to experience how these visual representations of your creations would look like in lettering.",
      imgSrc: `${arts}`,
      cardColor: "projcard-green",
    },
    {
      title: "Messaging",
      subtitle:
        "Memorize Your Messages: The Desire of the Texts to Dance on the Screen.",
      description:
        "Personalize your messages with the fonts that put character and life into them. In addition to greetings, invitations, and announcements, our choice of fonts is sure to add a bit of spunk. Starting from bold headers to the elegant scripts, get your messages enthralled and arrest the attention of the audience. Thanks to fonts that convey so many emotions, each word becomes a powerful stamp of your thoughts.",
      imgSrc: `${message}`,
      cardColor: "projcard-yellow",
    },
    {
      title: "Documents",
      subtitle:
        "The Document Design Reconceptualisation: the Information into the Inspiration Transformation",
      description:
        "Make your document something more than ordinary with a rich typeface. Whether you're developing presentations, reports or spreadsheets, our wide selection of fonts offers dashes of elegance and cleverness to each page. Done in unique titles to stylish body text, your documents will stand out and they make an impression. Bid farewell to dull documents and welcome to a time of limitless creativity with fonts that change document building.",
      imgSrc: `${document}`,
      cardColor: "projcard-brown",
    },
  ];

  return (
    <div>
      <p className="use-heading">
        How to unleash your creativity with fontsVilla’s {filterText} text
        generator
      </p>
      <div className="projcard-container">
        {projects.map((project, index) => (
          <div className={`projcard ${project.cardColor}`} key={index}>
            <div className="projcard-innerbox">
              <img
                className="projcard-img"
                src={project.imgSrc}
                alt="Project"
              />
              <div className="projcard-textbox">
                <div className="projcard-title">{project.title}</div>
                <div className="projcard-subtitle">{project.subtitle}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontUses;
