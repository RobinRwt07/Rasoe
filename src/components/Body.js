import RestaurantCard from "./RestaurantCard";
import resList from '../utils/dummy-data';

const Body = () => {
    return (
        <main className="main-container">
            <div className="restro-container">
                {
                    // Render all restaurant using map function
                    resList.map(function (restaurant) {
                        return < RestaurantCard key={restaurant.data.id} restroData={restaurant} />
                    })
                }
            </div>
        </main>
    );
}

export default Body;