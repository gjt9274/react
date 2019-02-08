import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden
`
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    width:280px;
    padding-top:30px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:10px;
    .topic-pic{
        display:block;
        float:left;
        margin-right:10px;
        width:32px;
        height:32px;
    }
    
`

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .listPic{
        display:block;
        width:150px;
        height:100px;
        float:right;
        border-radius:4px;
    }
`

export const ListInfo = styled.div`
    width:475px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .dsc{
        font-size:13px;
        line-height:18px;
        color:#999;
    }
`
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    margin:30px 0;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
    :hover{
        background:#9b9b9b
    }

`
export const RecommendWrapper = styled.div`
    width:280px;
`

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
    margin-bottom:6px;
`
export const AdsWrapper = styled.div`
    width:280px;
    height:82px;
    padding:10px 22px;
    margin-bottom:30px;
    box-sizing:border-box;
    border:1px solid #ccc;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-items: center;
    .adsPic{
        display:block;
        float:left;
        width:60px;
        height:60px;

    }
`
export const AdsContent =styled.div`
    margin-left:7px;
    .adsTitle{
        font-size: 15px;
        color: #333;
    }
    .adsDesc{
     margin-top: 4px;
        font-size: 13px;
        color: #999;
}
    }
`

export const WriterWrapper = styled.div`
    width:280px;
`
export const WriterTitle = styled.div`
    overflow:hidden;
    .title{
        float:left;
        font-size: 14px;
        color: #969696;
    }
    .switch{
        cursor:pointer;
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        .spin{
        display:inline-block;
        margin-right:4px;
        transition:all .3s ease-in;
        transform-origin:center center;
    }
    }

`
export const WriterList = styled.div`
    margin: 0 0 20px;
    text-align:left;

`
export const WriterItem = styled.div`
    padding-top:20px;
    overflow:hidden;
    .authorPic{
        display:block;
        float:left;
        width:48px;
        height:48px;
        border-radius:50%;
    }

   
`

export const WriterInfo = styled.div`
    float:right;
    width:232px;
    padding-left:10px;
    box-sizing:border-box;
    .guanzhu{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor:pointer;
    }
    .authorName{
        padding-top: 5px;
        font-size: 14px;
        line-height:14px;;
        display: block;
    }
    .authorDesc{
        margin-top: 10px;
        font-size: 12px;
        line-height:12px;
        display: block;
        color: #969696;
    }

`

export const BackTop = styled.div`
    position:fixed;
    right:30px;
    bottom:60px;
    height:60px;
    width:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:12px
`