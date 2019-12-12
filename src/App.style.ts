import styled from "styled-components";
import {DefaultStyle} from "./assets/style";

interface IProps {
    selected?: boolean;
}

export const AppBase = styled.div<IProps>`

padding-top: 54px;
color: ${DefaultStyle.secondary};
background-color: ${DefaultStyle.bgColor};
font-family: ${DefaultStyle.secondaryFont};

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${DefaultStyle.primaryFont};
  font-weight: 700;
  color: ${DefaultStyle.secondary};
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2rem;
}

p.lead {
  font-size: 1.15rem;
  font-weight: 400;
}

.subheading {
  font-weight: 500;
  font-family: ${DefaultStyle.secondaryFont};
  font-size: 1.5rem;
}

.sub-title{
    font-family: ${DefaultStyle.subTitleFont};
    font-size: 1.5rem;
    color: ${DefaultStyle.tertiary};
}

a {
  color: ${DefaultStyle.secondary};
}

a:hover, a:focus, a:active {
  color: ${DefaultStyle.primary};
}

.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
}

@media (min-width: 768px) {
    /* Resume section */
    section.resume-section {
      min-height: 100vh;
    }
    
    /* Resume section */
    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
}

@media (min-width: 992px) {
    
}

@media (min-width: 992px) {

    padding-top: 0;
    padding-left: 17rem;
    
    /* Resume section */
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
}

`;