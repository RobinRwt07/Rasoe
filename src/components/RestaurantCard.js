import { RESTRO_IMG as restaurant_img } from '../utils/constant';

const RestaurantCard = (props) => {
    const { restroData } = props;
    const { data: { name, avgRating, cuisines, deliveryTime, cloudinaryImageId } } = restroData;
    return (
        <div className="restro-card">
            <div className="restro-img">
                <img src={restaurant_img + cloudinaryImageId} alt="Restro Image" width={200} height={150} />
            </div>
            <div className="restro-info">
                <h3>{name}</h3>
                <span>{avgRating}</span>
                <p>{cuisines.join(", ")}</p>
                <h4>{deliveryTime} Minutes</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;
