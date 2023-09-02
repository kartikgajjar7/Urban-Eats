import { useEffect, useState } from "react"
import { MENU_URL } from "../../utils/constant"

const useRestaurantId = (res_id) => {
    const [res_info, setres_info] = useState(null)
    console.log("FETCH CALLED")
    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
        const data = await fetch(MENU_URL + res_id)
        const json_data = await data.json()
        setres_info(json_data)

    }

    return res_info
}
export default useRestaurantId
// https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.033863&lng=72.585022&restaurantId=${res_id}`