import styled from 'styled-components'
import background from '../../assest/background.jpg'

export const Navbar = styled.div`
  width: 100%;
  position: fixed;
  background-color: #8da399ff;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  .logo {
    font-size: 23px;
    color: white;
    text-transform: uppercase;
    margin: 18px 80px;
  }
  nav {
    display: flex;
    margin: 22px 140px;
    li {
      list-style: none;
      text-transform: capitalize;
      margin: 0px 20px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
  @media screen and (max-width:480px) {
      display: flow-root;
      nav{
          margin: 30px 50px;
li{
    text-align: center;
    margin: 0px 30px;
}
    }
  }
`

export const HomePage = styled.div`
  width: 100%;
  background-image: url(${background});
  height: 540px;
  background-repeat: no-repeat;
  color: white;
  .text {
    position: absolute;
    top: 200px;
    width: 38%;
    text-align: center;
    margin: 0px 310px;
    font-size: 40px;
    .post {
      margin: 30px 0;
      color: rgba(0, 214, 180, 1);
      background-color: transparent;
      padding: 10px 30px;
      text-transform: uppercase;
      border: 2px solid rgba(0, 214, 180, 1);
    }
  }
  @media screen and (max-width:768px) {
    width: 100%;
    .text {
        font-size: 34px;
      width: fit-content;
      margin: 0px 100px;
    }
  }
  
`

export const About = styled.div`
  width: 100%;
  color: white;
  padding-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  .titles {
    padding: 30px 0;
    text-align: center;
    font-size: 30px;
  }
  .card-wraper {
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 10px;
    }
  }
  .end {
    text-align: center;
    span {
      font-size: 14px;
    }
  }
  @media screen and (max-width:480px) {
    width: 100%;
    .card-wraper{
        display: grid;
        img{
            width: 90%;
        }
    }
  }
`
