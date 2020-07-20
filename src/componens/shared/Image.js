import React from 'react';

import styled from "styled-components";

const Img = styled.img`
    width: 30px;
    height: 30px
`;

 function Image({src}) {
    return (
        <Img src={src}/>
    )
}

export default Image;