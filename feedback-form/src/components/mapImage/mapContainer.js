import React, { Component } from 'react';
// import styles from './mapContainer.module.css';
import styled from 'styled-components';
import colors from '../helpers/var';
import map from '../../image/CapturaMap.png';
import yellow_cartoon from '../../image/smail.png';
import red_cartoon from '../../image/red.png';


const StyledWraper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative;
width: 626px;
height: 976px;
`;

const StyledTrumb = styled.div`
border-radius: 500px 0 0  500px;
box-shadow: inset 0px 16px 42px ${colors.box_shadow};
width: 626px;
height: 976px;
overflow: hidden;


`;

const StyledCartoon = styled.div`
position:absolute;
left: -10%;
height: ${(props)=>(props.red ?'212px':'127px')};
width: ${(props)=>(props.red ?'212px':'127px')};
background-image: url(${(props)=>(props.red ?`${red_cartoon}`:`${yellow_cartoon}`)});
background-size: contain;
background-repeat: no-repeat;
transform: rotateY(${(props)=>(props.red ?'30%':'50%')});
margin-bottom: ${(props)=>(props.red ?'111px':'270px')};
z-index: ${(props)=>(props.red ?'0':'100')};
`;
const Img = styled.img`
  display: block;
  width: auto;
  height: 110%;
  object-fit: cover;
  `;
class MapImage extends Component {

    render() {
      return (
        <>
          <StyledWraper>
            <StyledTrumb>
          <Img src={`${map}`} alt='map'/>
          </StyledTrumb>
          <StyledCartoon />
          <StyledCartoon red />
        </StyledWraper>
          </>
        )
    }
}

export default MapImage;