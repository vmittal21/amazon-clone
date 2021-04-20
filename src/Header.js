import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://mediad.publicbroadcasting.net/p/krwg/files/styles/medium/public/201912/Amazon-Logo_Feature.jpg"}/>
            </HeaderLogo>
            
            <HeaderOptionAddress>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchOutlinedIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                <OptionLineOne>Hello, User</OptionLineOne>
                <OptionLineTwo>Account and Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                <OptionLineOne>Returns</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart></HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height = 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
`
const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
    `
const HeaderOptionAddress = styled.div`
    margin: 10px;
`
const HeaderSearch = styled.div`
    display: flex;
`
const OptionLineOne = styled.div`
    
`
const OptionLineTwo = styled.div`
    
`
const HeaderSearchIconContainer = styled.div`
    
`
const HeaderSearchInput = styled.input`
    
`
const HeaderOption = styled.div
`
    margin: 10px;
`
const HeaderOptionCart = styled.div
``
const HeaderNavItems = styled.div
`
    margin: 10px;
    display: flex;
`


