const useResData = (res_data) => {

    const Upper_info_obj = {
        name: `${res_data?.data?.cards[0]?.card?.card?.info?.name}`,
        cusines: `${res_data.data.cards[0].card.card.info.cuisines}`,
        city: `${res_data.data.cards[0].card.card.info.city}`,
        diliverytime: `${res_data.data.cards[0].card.card.info.sla.deliveryTime}`,
        rating_num: `${res_data.data.cards[0].card.card.info.avgRating}`,
        locality: `${res_data.data.cards[0].card.card.info.locality} ${res_data.data.cards[0].card.card.info.sla.lastMileTravelString}`,
        cost_for_two: `${res_data.data.cards[0].card.card.info.costForTwoMessage}`,
        total_rating: `${res_data.data.cards[0].card.card.info.totalRatingsString}`,
        cost_for_two: `${res_data.data.cards[0].card.card.info.costForTwoMessage}`,
    };
    return Upper_info_obj
}
export default useResData