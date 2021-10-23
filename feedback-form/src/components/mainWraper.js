import React from 'react';
// import reactDom from 'react-dom'
import styled from 'styled-components';
import colors from './helpers/var';
import img from '../image/Cloud1.png';
import yellow_cartoon from '../image/yellow.png';
import Ellipe31 from '../image/Ellipse31.png';


const StyledWraper = styled.div`
display:flex;
justify-content: space-between;
pading:0px;
background-image: url(${yellow_cartoon}), url(${Ellipe31}),url(${img});
background-repeat: no-repeat;
background-position: top 3.9% left 3.7%, top 1.46% right 49.6%;
background-size: 5.7% , 6%, 100;
background-color: ${colors.white};
@media screen and (min-width: 900px) {
  body {
    background-color: orange;
  }
}
`;


const  Wraper = ({children})=> {
        return (
            <StyledWraper>
              {children}
            </StyledWraper>
        )
};
export default Wraper;