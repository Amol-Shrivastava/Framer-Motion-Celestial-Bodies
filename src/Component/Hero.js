import React from "react";
import styled from "styled-components";
import PlanetOne from "../images/planet-1.svg";
import PlanetTwo from "../images/planet-2.svg";
import PlanetThree from "../images/planet-3.svg";
import PlanetFour from "../images/planet-4.svg";

import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      delay: 0.8,
    },
  },
};

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Space
            </motion.h1>
            <motion.p variants={fadeLeft} initial="hidden" animate="visible">
              Journey to the Universe
            </motion.p>

            <div>
              <Button
                whileHover={{
                  scale: 1.05,
                  border: "2px solid #914d0e",
                  color: "#914d0e",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1.3 },
                }}
              >
                Explore More
              </Button>
            </div>
          </ColumnLeft>

          <ColumnRight>
            <Image
              src={PlanetOne}
              alt="PlanetOne"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ top: 0, right: 250, left: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            />
            <Image
              src={PlanetTwo}
              alt="PlanetTwo"
              whileTap={{ scale: 0.77 }}
              drag={true}
              dragConstraints={{ top: 0, right: 0, left: 50, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            />
            <Image
              src={PlanetThree}
              alt="PlanetThree"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ top: 0, right: 250, left: 0, bottom: 50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            />
            <Image
              src={PlanetFour}
              alt="PlanetFour"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default Hero;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.6rem;
    color: #ececec;
    font-weight: bold;
    @media screen and (max-width: 900px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: #b1b0b0;
    margin: 2rem 0;
    letter-spacing: 1px;
    @media screen and (max-width: 900px) {
      font-size: 1.1rem;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 0.5rem 2rem;
  border: 2px solid #ececec;
  color: #ececec;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.85rem;
  background: transparent;
  font-family: "Poppins";
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 220px;
  max-height: 220px;
`;

const ColumnRight = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  padding: 2rem;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 10px;
  }

  ${Image}:nth-child(4) {
    bottom: 10px;
    right: 40px;
  }
`;
