import './index.css'

const CategoryCard = props => {
  const {eachOne, onClickChangeCategory, filteredItemcategory} = props
  const {tabId, displayText} = eachOne
  const activeTab =
    filteredItemcategory === tabId ? 'category-button-active' : ''
  const onClickCategory = () => {
    onClickChangeCategory(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`category-button ${activeTab}`}
        onClick={onClickCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default CategoryCard
