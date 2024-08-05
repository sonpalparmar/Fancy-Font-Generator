/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
import { useState, useEffect, useRef } from "react";
import {
  CenterCom,
  InstagramPrev,
  LeftSidebar,
  RightCon,
} from "./GeneralComponent";
import uparrow from "../assets/up-arrow.svg";
import AnimationCanvas from "./AnimationCanvas";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BodyContainer = ({
  isPreview,
  setIsPreview,
  clickedIndex,
  setClickedIndex,
}) => {
  const [clickedFont, setClickedFont] = useState("");
  const { height, width } = useWindowDimensions();
  const [inpVal, setInpVal] = useState("Preview Text");

  useEffect(() => {
    if (width > 1279) {
      setIsPreview(false);
    }
  }, [width]);

  const path = window.location.pathname;

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

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    document.title = filterText[clickedIndex] + " Text Generator";
    return () => {
      document.title = "Fancy Text Generator";
    };
  }, [clickedIndex]);

  useEffect(() => {
    const newPath = path.substring(1).split("-")[0];
    const cap = capitalizeFirstLetter(newPath);
    const index = filterText.indexOf(cap);
    setClickedIndex(index === -1 ? 0 : index);
  }, [path]);

  const MainContainer = () => {
    return (
      <div className="body-container">
        <div className="left-container">
          <LeftSidebar
            clickedIndex={clickedIndex}
            setClickedIndex={setClickedIndex}
          />
        </div>
        <div className="center-container">
          <CenterCom
            inpVal={inpVal}
            setClickedFont={setClickedFont}
            clickedIndex={clickedIndex}
          />
        </div>
        <div className="right-container">
          <RightCon clickedFont={clickedFont} />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/pretty-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/glitch-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/small-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/twitter-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/cursed-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/instagram-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/bold-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/cursive-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/italic-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
    {
      path: "/tiny-text",
      element: (
        <div className="body-container">
          <div className="left-container">
            <LeftSidebar
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
          </div>
          <div className="center-container">
            <CenterCom
              inpVal={inpVal}
              setClickedFont={setClickedFont}
              clickedIndex={clickedIndex}
            />
          </div>
          <div className="right-container">
            <RightCon clickedFont={clickedFont} />
          </div>
        </div>
      ),
    },
  ]);

  return (
    <div>
      {!isPreview && (
        <>
          <header className="header-cont">
            <h1>{filterText[clickedIndex]} Font Generator</h1>
            <p>
              Dive into world of {filterText[clickedIndex]} fonts and craft
              social media text that stands out. Copy and paste{" "}
              {filterText[clickedIndex]} fonts for free!
            </p>
            <input
              type="text"
              placeholder="Type your text here to get started"
              onChange={(e) => {
                setInpVal(e.target.value);
                if (e.target.value.length <= 1) {
                  setInpVal("Preview Text");
                }
                if (inpVal.length <= 1) {
                  setInpVal("Preview Text");
                }
              }}
            />
            <AnimationCanvas />
          </header>
          <RouterProvider router={router} />
        </>
      )}
      {isPreview && (
        <div className={`right-container ${isPreview ? "active-right" : " "}`}>
          <RightCon clickedFont={clickedFont} />
        </div>
      )}
    </div>
  );
};

export default BodyContainer;

export const PreviewBtn = ({ isPreview, setIsPreview }) => {
  return (
    <div className="preview-btn">
      <div
        className={`preview ${isPreview ? "close" : ""}`}
        onClick={() => {
          setIsPreview(!isPreview);
        }}
      >
        <img src={uparrow} alt="" />
        {isPreview ? "Close Preview" : "View Preview"}
      </div>
    </div>
  );
};

export function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
