import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect'

const Hero = (props) => (
  <>
    <Section title row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* Welcome To <br />
          My Personal Portfolio */}
          <Typewriter 
          
            onInit={(typewriter)=>{
              typewriter.changeDelay('natural')
              typewriter.changeDeleteSpeed(300)
              typewriter.typeString("Hi, My name is Mac,l").pauseFor(300).deleteChars(2).typeString("Laren")
              .pauseFor("1000")
              .typeString("!")
              // .typeString("Welcome to my site!")
              .start();
            }}  
          />
        </SectionTitle>
        <SectionText>
        <Typewriter 
          
            onInit={(typewriter)=>{
              typewriter.pauseFor(8000)
              typewriter.changeDelay(.2)
              typewriter.typeString("I'm a web developer studying computer science at McGill University")
              .start();
            }}  
          />

        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;