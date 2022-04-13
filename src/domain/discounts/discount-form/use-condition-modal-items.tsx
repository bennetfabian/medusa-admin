import React, { useContext } from "react"
import { LayeredModalContext } from "../../../components/molecules/modal/layered-modal"
import { DiscountConditionType } from "../types"
import CustomerGroupConditionSelector from "./condition-tables/customer-groups"
import ProductConditionSelector from "./condition-tables/products"
import TypeConditionSelector from "./condition-tables/types"
import TagConditionSelector from "./condition-tables/tags"

export type ConditionItem = {
  label: string
  value: DiscountConditionType
  description: string
  onClick: () => void
}

const useConditionModalItems = (close: () => void) => {
  const layeredModalContext = useContext(LayeredModalContext)

  const items: ConditionItem[] = [
    {
      label: "Product",
      value: DiscountConditionType.PRODUCTS,
      description: "Only for specific products",
      onClick: () =>
        layeredModalContext.push({
          title: "Product",
          onBack: () => layeredModalContext.pop(),
          view: <ProductConditionSelector onClose={() => close()} />,
        }),
    },
    {
      label: "Customer group",
      value: DiscountConditionType.CUSTOMER_GROUPS,
      description: "Only for specific customer groups",
      onClick: () =>
        layeredModalContext.push({
          title: "Customer groups",
          onBack: () => layeredModalContext.pop(),
          view: <CustomerGroupConditionSelector onClose={close} />,
        }),
    },
    {
      label: "Tag",
      value: DiscountConditionType.PRODUCT_TAGS,
      description: "Only for specific tags",
      onClick: () =>
        layeredModalContext.push({
          title: "Product tags",
          onBack: () => layeredModalContext.pop(),
          view: <TagConditionSelector onClose={close} />,
        }),
    },
    {
      label: "Collection",
      value: DiscountConditionType.PRODUCT_COLLECTIONS,
      description: "Only for specific product collections",
      onClick: () => console.log("clicked"),
    },
    {
      label: "Type",
      value: DiscountConditionType.PRODUCT_TYPES,
      description: "Only for specific product types",
      onClick: () =>
        layeredModalContext.push({
          title: "Types",
          onBack: () => layeredModalContext.pop(),
          view: <TypeConditionSelector onClose={() => close()} />,
        }),
    },
  ]

  return items
}

export default useConditionModalItems
