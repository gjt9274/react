import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-index:1;
    margin:0 39.6px;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain
`

export const Nav = styled.div`
    width:960px;
    ${'' /* padding-right:70px;
    box-sizing:border-box; */}
    height:100%;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    &.left{
        float:left;
    }
    &.active{
        color:#ea6f5a
    }
    &.right{
        float:right;
        color:#969696;
        cursor:pointer;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:240px;
    transition:width 0.5s ease 0.1s;
    height:38px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    margin-left:20px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    color:#999;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:320px;
        transition:width 0.5s ease 0.1s;
    }



`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;;
    top:56px;
    width:250px;
    padding:0 20px;
    margin-left:20px;
    box-sizing:border-box;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfroSwitch = styled.span`
    float:right;
    font-size:14px;
    :hover{
        cursor:pointer;
    }
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .3s ease-in;
        transform-origin:center center;
    }
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:10px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`


export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149
    }

`