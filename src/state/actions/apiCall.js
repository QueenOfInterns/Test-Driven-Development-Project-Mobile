/* eslint-disable prettier/prettier */
import { SAVE_DATA } from './actionTypes';

export const saveData = (data) => {
    return {
        type: SAVE_DATA,
        payload: data,
    }
}