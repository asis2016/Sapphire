import styled from "styled-components";
import {DefaultStyle} from "../assets/style";

export const ProjectBase = styled.div`

    .card{
      background-color: transparent;
      border-color: transparent;
    }
    
    .card-body{
      padding-left: 0;
      color: ${DefaultStyle.secondary};
    }
    
    .card-title{
      font-family: ${DefaultStyle.primaryFont};
      color: ${DefaultStyle.primary};
    }
    
    .card-text{
      font-family: ${DefaultStyle.secondaryFont};
    }

`;