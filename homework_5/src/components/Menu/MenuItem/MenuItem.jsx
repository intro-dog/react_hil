import Button from "../../Button/Button"

export default function MenuItem({ item }) {
  return (
    <div className="pizza">
      {!item.soldOut ? (
        <>
          <img
            className="pizza__image"
            src={item.imageUrl}
            alt="Image of pizza"
          />
          <div className="pizza__info">
            <h2 className="pizza__name">{item.name}</h2>
            <p className="pizza__ingredients">{item.ingredients.join(", ")}</p>

            <p className="pizza__price"> €{item.unitPrice}.00</p>
          </div>
          <div className="pizza__button">
            <Button
              className={"button"}
              text={"Add to cart"}
              onClick={() => console.log(item)}
            />
          </div>
        </>
      ) : (
        <>
          <img
            className="pizza__image--deactivated"
            src={item.imageUrl}
            alt="Image of pizza"
          />
          <div className="pizza__info--deactivated">
            <h2 className="pizza__name">{item.name}</h2>
            <p className="pizza__ingredients">{item.ingredients.join(", ")}</p>

            <p className="pizza__sold-out">Sold out</p>
          </div>
        </>
      )}
    </div>
  )
}
