import axios from "axios"
import { BASEURL } from "../config/url";

export const getMetricsApi = async () => {
    try {
        const response = await axios.get(BASEURL + '/metrics');
        const low = response.data.lowPriorityMinutes;
        const medium = response.data.mediumPriorityMinutes;
        const high = response.data.highPriorityMinutes;
        const total = response.data.totalMinutes;
        return {low, medium, high, total};
        
    } catch (error) {
        throw error;
    }
}