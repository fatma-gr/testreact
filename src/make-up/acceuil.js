import React from "react"
import Slider from "./slider"
import CategoryCard from "./CategoryCards"
import StoreDescription from "./StoreDescription"
import { pic10, pic11, pic12, pic9 } from "./images"
import CardComponent from "./cardcomponent"

export default function Acceuil() {
  return (
    <div className="container">
      <Slider />
      <CardComponent />
      <StoreDescription />
      <div className="row category-section">
        <CategoryCard categoryName="Beauty" imageSrc={pic9} link="/beauty"
        />
        <CategoryCard categoryName="Fragrances" imageSrc={pic12} link="/fragrances"
        />
        <CategoryCard categoryName="Groceries" imageSrc={pic11} link="/groceries"
        />
        <CategoryCard categoryName="Furniture" imageSrc={pic10} link="/furniture"
        />
      </div>
    </div>
  )
}
