import styled from '../../theme';

const StyledUnreadMessagesCounter = styled("div")`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  float: right;
  position: relative;
  right: 22%;
  margin-top: -11px;
 
  // Landscape - Iphone 6, 6s, 7 and 8
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) { 
    right: 37%;
  }
  
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
     right: 26%;
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      right: 38%;
    }
    
    /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  
  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
      right: 24%;
  }
  
  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
      right: 39%;
  }
  
  /* ----------- iPad 1, 2, Mini and Air ----------- */

  /* Portrait */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1) {
      right: 38%;
  }
  
  /* Landscape */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
      right: 41%;
  }
  
  /* ----------- iPad 3, 4 and Pro 9.7" ----------- */
  
  /* Portrait */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 2) {
      right: 38%;
  }
  
  /* Landscape */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
      right: 41%;
  }
  
  /* ----------- iPad Pro 12.9" ----------- */
  
  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 1366px)
    and (-webkit-min-device-pixel-ratio: 2) {
      right: 41%;
  }
  
  @media only screen 
    and (min-device-width: 1366px) 
    and (max-device-width: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 2) {
      right: 44%;
  }
  
  /* ----------- Non-Retina Screens ----------- */
  @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 1) {
     right: 45%;
  }
  
  /* ----------- Retina Screens ----------- */
  @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi) {
    right: 45%;
  }

`;

export default StyledUnreadMessagesCounter;