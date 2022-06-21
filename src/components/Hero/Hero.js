import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My name is Dominik Gradiški
      </SectionTitle>
      <SectionText>
        The purpose of JS Mastery is to help aspiring. True web development skills offered to bring to every customer and bring value to the world of web development.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;