import Api from "../../core/api";
import { endPoints, requestType } from "../../core/constants/variables";
import { queryStringFromJSON } from "../../utils/helpers/api-helpers";

export const addUser = (params) => {
    return Api(endPoints.ADD_USER, params, requestType.POST);
};

export const getAUsers = (params) => {
    let queryParams = queryStringFromJSON(params);
    return Api(`${endPoints.GET_USERS}?${queryParams}`, params, requestType.GET);
};

export const getAUser = (id, params) => {
    return Api(`${endPoints.GET_USER}/${id}`, params, requestType.GET);
};

export const updateUser = (id, params) => {
    return Api(`${endPoints.UPDATE_USER}/${id}`, params, requestType.PUT);
};

export const deleteUser = (id, params) => {
    return Api(`${endPoints.DELETE_USER}/${id}`, params, requestType.DELETE);
};