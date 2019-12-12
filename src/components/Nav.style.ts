import styled from "styled-components";
import {DefaultStyle} from "../assets/style";


export const NavBase = styled.div`

    font-size: 1.2rem;
    font-family: ${DefaultStyle.secondaryFont};
    
    #sideNav {
        background-color: ${DefaultStyle.primary};
    }

    #sideNav .navbar-nav .nav-item .nav-link {
        font-weight: 800;
        letter-spacing: 0.05rem;
        color: #fff;
    }
    
    .nav-link:hover{
      
    }
    
@media (min-width: 992px) {

    #sideNav {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 17rem;
        height: 100vh;
    }
    
    #sideNav .navbar-brand {
        display: flex;
        margin: auto auto 0;
        padding: 0.5rem;
    }
    
    #sideNav .navbar-brand .img-profile {
        max-width: 10rem;
        max-height: 10rem;
        border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    
    #sideNav .navbar-collapse {
        display: flex;
        align-items: flex-start;
        flex-grow: 0;
        width: 100%;
        margin-bottom: auto;
    }
    
    #sideNav .navbar-collapse .navbar-nav {
        flex-direction: column;
        width: 100%;
    }
    
    #sideNav .navbar-collapse .navbar-nav .nav-item {
        display: block;
    }
    
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
        display: block;
    }

}

`;