import './CategoryMenu.css'

const categories = [
  "Kategorie",
  "Nowości",
  "Promocje",
  "Wyprzedaże",
  "Kolekcje sezony",
  "Nasza oferta",
  "Trendy 2018",
  "Blog",
  "Kontakt",
]

const CategoryMenu = () => {
  const checkIsActiveCategory = (category, index) => {
    // TODO: Add validation by slugs
    return index === 3;
  }
  return (
    <div className={"Container HorizontalContainer"}>
      {categories.map((category, index) =>
        <a className={`CategoryItem ${checkIsActiveCategory(category, index) ? 'ActiveCategory' : ''}`} key={index} href="/#">{category}</a>
      )}
    </div>
  )
}

export default CategoryMenu;
