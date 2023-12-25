import { BASE_URL } from "../constants/endpoints";

export const createRequestPath = (path, id) => {
    if (!id) return `${BASE_URL}${path}`;
    return `${BASE_URL}${path}/${id}`
}