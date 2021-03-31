import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from "react-router-dom";
import { MdSlowMotionVideo } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'





function Navbar() {

    // Function for changing the color of navbar when window scroll //

const [navBgColor, setNavBgColor] = useState(false);

const transitionsNav = () =>{
    if (window.scrollY > 100) {
        setNavBgColor(true);
    } else {
        setNavBgColor(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionsNav);
    return ()=> window.removeEventListener("scroll", transitionsNav);
}, [])

// ........End.........//


    return (
        <Header primary={navBgColor}>
            <Logo to="/"><MdSlowMotionVideo size={40} style={{filter:'drop-shadow(rgb(16, 10, 10) 2px 2px)'}}/>MSHOWS</Logo>
            <Nav>
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/movies">Movies</NavLink>
                <NavLink activeClassName="active" to="/tv-shows">TV Shows</NavLink>
            </Nav>
            <SearchBar>
                <input type="text" placeholder="Search movies,shows and more"/>
                <button><IoSearch size={20}/></button>
            </SearchBar>
            <Login>Login</Login>
        </Header>

    
    )
}






// Style start here 

const Header = styled.div`
    width:100%;
    height:66px;
    background-color:${({primary})=>(primary? '#0f2133': 'transparent')};
    display:flex;
    align-items:center;
    position:fixed;
    transition:all 0.3s;
    z-index:1000;
    box-shadow:${({primary})=>(primary? '2px -3px 14px rgb(16 10 10)': 'inherit')};
    
`;
const Logo = styled(Link)`
    width:auto;
    height:40px;
    color:#FFF;
    font-size:30px;
    font-weight:500;
    display:flex;
    margin-left:20px;
    justify-content:center;
    align-items:center;
    text-shadow:2px 2px rgb(16, 10, 10);
    text-decoration:none;
`;
const Nav = styled.div`
    width:auto;
    height: 40px;
    display:flex;
    align-items:center;
    margin-left:20px;
    a{
        text-decoration:none;
        padding:6px 23px;
        margin:2px;
        color:#dfdfdf;
        font-size:16px;
        font-weight:500;
        transition: all 0.2s;
    }
    a:hover{
        color:#ffbd03;
    }
    .active{
        color:#ffbd03;
    }
`;
const SearchBar = styled.div`
    margin-left:auto;
    margin-right:20px;
    overflow:hidden;
    background-color:#efefef;
    display:flex;
    align-items:center;
    border-radius:3px;
    input, button{
        height:34px;
        border:none;
        outline:none;
        background:none;
        width:200px;
        display:flex;
        padding:0px 10px;
        align-items:center;
    }
    button{
        width:40px;
        padding:0;
        justify-content:center;
        cursor: pointer;
        transition:all 0.2s;
        background-color:#ffbd03;
        color:#222;
        :hover{
            background-color:#f3b406;
        }
    }
`;
const Login = styled.div`
    height:34px;
    width:80px;
    border-radius:3px;
    padding:5px 18px;
    font-weight:500;
    color:#222;
    background-color:#ffbd03;
    margin-right:20px;
    cursor: pointer;
`;
















export default Navbar;
