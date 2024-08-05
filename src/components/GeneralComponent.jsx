import { useEffect, useState } from "react";
import star from "../assets/star.svg";
import bold from "../assets/bold.svg";
import cursed from "../assets/cursed.svg";
import flash from "../assets/flash.svg";
import instagram from "../assets/instagram.svg";
import italic from "../assets/italic.svg";
import textsize from "../assets/text-size.svg";
import all from "../assets/all.svg";
import prev from "../assets/prev.svg";
import next from "../assets/next.svg";
import user from "../assets/user.svg";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import reelsdark from "../assets/reelsdark.svg";
import heart from "../assets/heart.svg";
import userpic from "../assets/userpic.svg";
import copy from "../assets/copy.svg";
import copied from "../assets/copied.svg";
import notification from "../assets/notification.svg";
import shop from "../assets/shop.svg";
import friend from "../assets/friend.svg";
import video from "../assets/video.svg";
import plus from "../assets/plus.svg";
import edit from "../assets/edit.svg";
import camera from "../assets/camera.svg";
import profile from "../assets/profile.svg";
import fbback from "../assets/fb-back.jpg";
import instaimg from "../assets/instaimg.png";
import preview from "../assets/preview.gif";
import generateFancy from "../config";
import { Link } from "react-router-dom";

const TextContainer = ({
  k,
  generatedText,
  fontStyle,
  setClickedFont,
  clicked,
  setClicked,
}) => {
  const [text, setText] = useState("Copy");
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    setIsActive(true);
    setText("Copied!");
    try {
      await navigator.clipboard.writeText(generatedText);
    } catch (err) {}

    setTimeout(() => {
      setText("Copy");
      setIsActive(false);
    }, 2000);
  };

  useEffect(() => {
    if (clicked !== k) {
      setIsActive(false);
      setText("Copy");
    }
  }, [clicked, k]);

  return (
    <div
      className={`text-container ${text === "Copied!" ? "active-cont" : ""}`}
      onClick={() => {
        setClickedFont(generatedText);
        setClicked(k);
        handleClick();
      }}
    >
      <div>
        <h3>{generatedText}</h3>
        <p>{fontStyle}</p>
      </div>
      <div
        className={`copy-btn ${text === "Copied!" ? "active" : ""}`}
        onClick={handleClick}
      >
        <div>{text}</div>
      </div>
      <div
        className={isActive ? "active-svg" : "copy-btn-svg"}
        onClick={handleClick}
      >
        <img loading="lazy" src={isActive ? copied : copy} />
      </div>
    </div>
  );
};

export const LeftSidebar = ({ clickedIndex, setClickedIndex }) => {
  const handleClick = (index) => {
    setClickedIndex(index);
  };
  const icons = [
    { icon: all, text: "All" },
    { icon: star, text: "Pretty" },
    { icon: flash, text: "Glitch" },
    { icon: textsize, text: "Small" },
    { icon: star, text: "Twitter" },
    { icon: cursed, text: "Cursed" },
    { icon: instagram, text: "Instagram" },
    { icon: bold, text: "Bold" },
    { icon: italic, text: "Cursive" },
    { icon: italic, text: "Italic" },
  ];
  return (
    <div className="sidebar-cont">
      <h4>Font Styles</h4>
      <div className="menu-container">
        {icons.map(({ icon, text }, index) => (
          <Link
            to={`/${text === "All" ? "" : text.toLowerCase() + "-text"}`}
            key={index}
          >
            <p
              onClick={() => handleClick(index)}
              className={`clickable-svg ${
                clickedIndex === index ? "clicked" : ""
              }`}
              key={index}
            >
              <img loading="lazy" src={icon} alt={`${text} svg`} /> {text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const CenterCom = ({ inpVal, setClickedFont, clickedIndex }) => {
  const [fontdata, setFontData] = useState([]);
  const [tempFontdata, setTempFontData] = useState([]);
  const [clicked, setClicked] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(30);
  const [isfilter, setIsFilter] = useState(false);

  const filterText = [
    "pretty",
    "glitch",
    "small",
    "fancy",
    "cursed",
    "instagram",
    "bold",
    "cursive",
    "italic",
  ];

  useEffect(() => {
    const ans = generateFancy(inpVal);
    const newAns = ans.map((font) => {
      const randomIndex = Math.floor(Math.random() * filterText.length);
      const randomFilter = filterText[randomIndex];
      return {
        font,
        filteredText: randomFilter,
      };
    });

    setFontData(newAns);
    setTempFontData(newAns);
  }, [inpVal]);

  useEffect(() => {
    if (clickedIndex !== 0) {
      const filteredFonts = tempFontdata.filter((item) => {
        return item.filteredText === filterText[clickedIndex];
      });
      setIsFilter(true);
      if (filteredFonts.length > 0) {
        setFontData(filteredFonts);
      }
    } else {
      if (isfilter) {
        setFontData(tempFontdata);
      }
    }
  }, [clickedIndex, tempFontdata]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 30);
  };

  return (
    <div className="center-main">
      {fontdata.slice(0, itemsToShow).map((item, index) => (
        <TextContainer
          key={index}
          k={index}
          generatedText={item.font}
          setClickedFont={setClickedFont}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
      {itemsToShow < fontdata.length && (
        <div className="load-more" onClick={handleLoadMore}>
          Load More Fonts
        </div>
      )}
    </div>
  );
};

export const RightCon = ({ clickedFont }) => {
  const [isPreview, setIsPreview] = useState(1);

  return (
    <div className="right-main-container">
      <div className="heading">
        <img
          loading="lazy"
          src={prev}
          alt="previous svg"
          onClick={() => {
            setIsPreview(1);
          }}
        />
        <p>{isPreview === 1 ? "Instagram Preview" : "Facebook Preview"}</p>
        <img
          loading="lazy"
          src={next}
          alt="next svg"
          onClick={() => {
            setIsPreview(2);
          }}
        />
      </div>
      {isPreview === 1 && <InstagramPrev clickedFont={clickedFont} />}
      {isPreview === 2 && <FacebookPrev clickedFont={clickedFont} />}
    </div>
  );
};

export const InstagramPrev = ({ clickedFont }) => {
  const data = [
    { label: "Posts", value: 100 },
    { label: "Followers", value: "2.2k" },
    { label: "Following", value: 42 },
  ];
  return (
    <div className="insta-container">
      <div className="bottom-cont">
        <div className="user">
          <div className="user-img">
            <img src={instaimg} alt="fontsvilla instagram image" />
          </div>
          <div className="profile-detail">
            {data.map((item, index) => (
              <div className="flex" key={index}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="user-detail">
          <p>Fonts Villa🔥</p>
          <p>{clickedFont === "" ? "Type Something to start" : clickedFont}</p>
          <a href="https://fontsvilla.com/" target="_blank">
            fontsvilla.com
          </a>
          <img
            className="arrow"
            alt="arrow sign svg"
            loading="lazy"
            width="45"
            height="45"
            decoding="async"
            data-nimg="1"
            src={preview}
          />
        </div>
        <div className="switch-btn">
          {["Following", "Message", "Contact"].map((label, index) => (
            <p key={index}>{label}</p>
          ))}
          <img loading="lazy" src={user} alt="" />
        </div>
      </div>
      <div className="bottom-icon">
        {[home, search, reelsdark, heart, userpic].map((icon, index) => (
          <img loading="lazy" key={index} src={icon} alt="" />
        ))}
      </div>
      <div className="bottom-line"></div>
    </div>
  );
};
export const FacebookPrev = ({ clickedFont }) => {
  return (
    <div className="insta-container">
      <div className="bottom-cont fb-bottom">
        <div className="back-img">
          <img loading="lazy" className="background" src={fbback} alt="" />
          <div>
            <img loading="lazy" src={profile} alt="user profile svg" />
            <img loading="lazy" src={camera} alt="Profile cam" />
          </div>
        </div>
        <div className="user fb-user">
          <div className="fb-img">
            <img src={instaimg} alt="Facebook fontsvilla user" />
            <img loading="lazy" src={camera} alt="Profile cam" />
          </div>
        </div>
        <div className="user-detail">
          <p>Fonts Villa🔥</p>

          <p>{clickedFont === "" ? "Type Something to start" : clickedFont}</p>
          <a href="https://fontsvilla.com/" target="_blank">
            fontsvilla.com
          </a>

          <img
            className="arrow"
            alt="arrow sign svg"
            loading="lazy"
            width="45"
            height="45"
            decoding="async"
            data-nimg="1"
            src={preview}
          />
        </div>
        <div className="switch-btn fb-switch">
          <p>
            <img loading="lazy" src={plus} alt="Add story" /> Add Story
          </p>
          <p>
            <img loading="lazy" src={edit} alt="Profile Edit" /> Edit Profile
          </p>
          <p>...</p>
        </div>
      </div>
      <div className="bottom-icon">
        {[home, friend, video, shop, notification, userpic].map(
          (icon, index) => (
            <img loading="lazy" key={index} src={icon} alt="" />
          )
        )}
      </div>
      <div className="bottom-line"></div>
    </div>
  );
};
