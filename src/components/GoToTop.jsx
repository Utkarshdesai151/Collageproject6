import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const heightToShow = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setIsVisible(winScroll > heightToShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper
      onClick={goToBtn}
      className={isVisible ? "show" : "hide"}
    >
      ↑
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 50px;
  width: 50px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: bold;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  /* animation base */
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;

  transition: 
    opacity 0.4s ease,
    transform 0.4s ease,
    background-color 0.3s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  &.hide {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
  }

  &:hover {
    background-color: #0056b3;
    transform: translateY(-4px);
  }
`;

export default GoToTop;
