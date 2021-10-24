import styled from 'styled-components';
import colors from '../helpers/var';
import {device}  from '../helpers/device';

const StyledForm = styled.form`
        height: 563px;
        width: 300px;
        padding: 0 10px;
        margin: 50px auto 30px auto ;
        z-index:10;
    @media ${device.mobileL} {
        height: 563px;
        width: 400px;
    }
    @media ${device.tablet} {
        height: 563px;
        width: 500px;
        margin-left: 100px;
        margin-top: 110px;
        margin-bottom: 110px;
    }
    @media ${device.laptop} {
        margin-left: 150px;
        margin-top: 179px;
        margin-bottom: 174px;
    }
    @media ${device.laptopL} {
        height: 563px;
        max-width: 557px;
        margin-left: 150px;
        margin-top: 179px;
        margin-bottom: 174px;
    }
`;

const StyledTitle = styled.h1`
margin-bottom: 30px;
font-family: Apercu Arabic Pro;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 130%;
color: ${colors.title_text};
} 
`;

const StyledInput = styled.input`
    height: 50px;
    width: 90%;
    padding-left: 20px;
    margin-bottom: 8px;
    border: 1px solid ${colors.border_color};
    border-radius: 10px;
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: ${colors.form_text};

   @media ${device.laptop} {
    height: 93px;
    width:90%;
    line-height: 32px;
    padding-left: 46px;
    }

`;
const StyledText = styled.textarea`
    width:90%;
    height: 100px;
    resize:none;
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: ${colors.form_text};
    padding-left: 20px;
    margin-bottom:23px;
    border: 1px solid ${colors.border_color};
    border-radius: 10px;

    @media ${device.tablet} {
        height: 189px;
    }

    @media ${device.laptopL} {
        width: 557px;
    }
`;
const StyledButton = styled.button`
    height: 60px;
    width: 150px;
    padding: 15px 10px;
    border: 1px solid transparent;
    color: ${colors.white});
    background-color: ${colors.yellow};
    border-radius: 35px;
    font-size: 18px;
    line-height: 18px;

    @media ${device.tablet}{
    height: 73px;
    width: 218;
    }
`;

const component =  {
    StyledForm,
    StyledTitle,
    StyledInput,
    StyledText,
    StyledButton
}
export default component