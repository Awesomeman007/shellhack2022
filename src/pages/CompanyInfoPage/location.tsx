import React from 'react';
import map from "../../assets/map.png"
import styled from 'styled-components'

const StyledImage = styled.img`
    object-fit: cover;
    display: block;
    width: 100vw;
    min-height: 300px;
`
// const Container = styled.div`
//     width: 100vw;
//     min-height: 400px;
//     // background-color: white;
// `

const Location = () => {
    return (
        // <Container>
            <StyledImage src={map} />
        // </Container>
    )
}

export default Location