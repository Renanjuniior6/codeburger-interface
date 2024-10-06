import React, { useEffect, useState } from "react"
import Carousel from "react-elastic-carousel"

import api from "../../services/api"
import { Container, ContainerItems, Image, Button, CategoryH1 } from "./styles"

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get("categories")

      setCategories(data)
    }
    loadCategory()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ]
  return (
    <Container>
      <CategoryH1>CATEGORIAS</CategoryH1>

      <Carousel
        itemsToShow={4}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button
                to={{
                  pathname: "/produtos",
                  state: { categoryId: category.id },
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
