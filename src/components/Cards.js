import Card from "./Card";
import data from "../data";

const Cards = () => {
    return (
        <div className="flex items-center justify-center space-x-24 pt-24">
            {data.map(item => {
                return (
                    <Card
                        key={item.id}
                        img={item.coverImg}
                        rating={item.stats.rating}
                        reviewCount={item.stats.reviewCount}
                        location={item.location}
                        title={item.title}
                        price={item.price}
                        openSpots={item.openSpots}
                    />
                )
            })}

        </div>
    )
}

export default Cards