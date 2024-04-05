import RestaurantCard from "./RestaurantCard";
import LoadingComponent from './LoadingComponent';
import { useState, useEffect } from "react";


const Body = (props) => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);
    const [matchedRestaurantList, setMatchedRestaurantList] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    console.log("body rendered");

    // Event handler for Top rated Rastaurant
    function handleClick() {
        const filteredList = restaurantList?.filter((restaurant) => {
            return restaurant.info.avgRating >= 4.0;
        });
        setFilterRestaurantList(filteredList);
    }


    useEffect(() => {
        fetchData()
    }, []);



    // fetch data from swiggy api
    async function fetchData() {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const data = await fetch(url);
        const json = await data.json(url);

        const receivedRestaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(receivedRestaurantList);
        setFilterRestaurantList(receivedRestaurantList);

    }

    // Show Loading Status(Shimmer UI) while data is fetching
    if (restaurantList?.length === 0) {
        return <LoadingComponent />
    }

    return (
        <main className="main-container">

            {/* search container */}
            <div className="search-container">
                <div className="search-bar">
                    {/* bind input box with state variable input Value*/}
                    <input className="input-box" type="search"
                        placeholder="Search Food"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                            console.log("value change");
                            console.log("SValue:" + searchValue);
                            if (searchValue.length === 0 || searchValue.length === 1) {
                                setMatchedRestaurantList([]);
                            }
                            else {
                                const matchedRestaurant = restaurantList.filter(
                                    restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
                                );
                                setMatchedRestaurantList(matchedRestaurant);
                                console.log("SV:" + searchValue);
                            }
                        }
                        }
                    />

                    {/* call  */}


                    <button onClick={() => {
                        const updatedRestaurantList = restaurantList.filter(
                            (restaurant) => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        );
                        setFilterRestaurantList(updatedRestaurantList);
                    }}>Search</button>

                    <div className="searchedRestaurant">
                        <ul>
                            {
                                matchedRestaurantList.map(
                                    restaurant => <li key={restaurant.info.id} className="restaurantItem">{restaurant.info.name}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                {/* Top Rated Restaurant */}
                <button className="filterBtn" onClick={handleClick}>Top Rated Restaurant</button>


            </div>

            <div className="restro-container">
                {
                    // Render all restaurant using map function
                    filterRestaurantList?.map(function (restaurant) {
                        return < RestaurantCard key={restaurant.info.id} restroData={restaurant} />
                    })
                }
            </div>
        </main >
    );
}

export default Body;