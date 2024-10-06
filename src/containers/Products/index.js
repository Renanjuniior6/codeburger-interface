import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import ProductLogo from "../../assets/home-image-1 (1).svg"
import { CardProducts } from "../../components"
import api from "../../services/api"
import formartCurrency from "../../utils/formartCurrency"
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoryMenu,
  ProductsContainer,
} from "./styles"

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get("categories")

      const newCategories = [{ id: 0, name: "Todas" }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("products")

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formartCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategory()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo da home" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              onClick={() => {
                setActiveCategory(category.id)
              }}
              type="button"
              isActiveCategory={activeCategory === category.id}
              key={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object,
}
