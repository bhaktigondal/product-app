import "./Home.css"
import cards from "../../data"
import ProdutCard from "../../components/ProductCard/ProdutCard"

function Home() {
    console.log(cards)
  return (
   <>
   <div className="cards-container">
      {
      cards.map((cardObject, i) => {
        const { id, productimage, title, price, content, details, features } = cardObject;
        return (
          <ProdutCard
          key={i}
            id={id}
            productimage={productimage}
            title={title}
            price={price}
            content={content}
            details={details}
            features={features}
           
          />
        );
      })}
      </div>
    </>
   
  )
}

export default Home