import styled from "styled-components";
import {DefaultStyle} from "../assets/style";


export const AboutBase = styled.div`

.social-icons a {
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: ${DefaultStyle.primary};
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
}

.social-icons a:last-child {
    margin-right: 0;
}

.social-icons a:hover {
    background-color: ${DefaultStyle.tertiary};
}

`;