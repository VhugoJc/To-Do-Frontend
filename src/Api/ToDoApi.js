import axios from "axios"
import { BASEURL } from "../config/url";

export async function getToDoApi (filter,sort, pagination) { // 
    const {name, priority, status} = filter;
    const {sortByDate, sortByPriority} = sort;
    //filter, sort and pagination parameters 
    let params = "?";
    if (name !== "") {
        params += "name=" + name + "&";
    }
    if (priority !== 'all') {
        params += "priority=" + priority + "&";
    }
    if (status !== "all") {
        params += "status=" + status + "&";
    }
    if (sortByDate !== null) {
        params += "sortByDate=" + sortByDate + "&";
    }
    if (sortByPriority !== null) {
        params += "sortByPriority=" + sortByPriority + "&";
    }
    params += "page=" + pagination;

    //GET request with axios:
    try {
        const response = await axios.get(BASEURL + '/todos' + params);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export async function postToDoApi (body){
    //POST request with axios
    try{
        const response = await axios.post(BASEURL + '/todos', body);
        return response;
    }catch(error){
        throw error;
    }
}


export async function deleteToDoApi (id)  {
    // DELETE request with axios
    try {
        await axios.delete(BASEURL + '/todo/' + id);
    } catch (error) {
        throw error;
    }
}


export async function updateToDoApi(id, body){
    // PUT request with axios
    try {
        const response = await axios.put(BASEURL + '/todos/' + id, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function postDoneTodoApi(id)  {
    try {
        await axios.post(BASEURL + '/todos/' + id + '/done');
    } catch (error) {
        throw error;
    }
}
export async function putUnoneTodoApi(id){
    try {
        await axios.put(BASEURL + '/todos/' + id + '/undone');
    } catch (error) {
        throw error;
    }
}
