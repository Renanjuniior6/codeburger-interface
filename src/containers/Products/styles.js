import styled from "styled-components"

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductImg = styled.img`
  width: 100%;
`
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #9758a6"};
  color: ${(props) => (props.isActiveCategory ? "#9758a6" : "#9a9a9a")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    margin: 0 6px 9px 6px;
  }
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    display: block;
    width: 97%;
    height: 55px;
    margin: 10px auto 30px auto;
    text-align: center;
  }
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2%;
    gap: 10px;
  }
`
