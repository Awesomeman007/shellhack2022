import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: blue;
    position: fixed;
    top: 0;
    z-index: 10;
`

const TopBar = () => {
    return (
        <>
            <Container />
        </>
    )
}

export default TopBar