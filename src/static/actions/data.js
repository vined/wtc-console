import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_SITES_REQUEST,
    FETCH_SITES_SUCCESS,
    SAVE_TASKS_ACTIONS_REQUEST,
    SAVE_TASKS_ACTIONS_SUCCESS,
} from '../constants';
import {fetchProtectedData, saveProtectedData} from './api'


export function fetchTasks(page, size, filter, orderBy) {
    return fetchProtectedData(
        `/api/v1/workflows/tasks/?page=${page || 1}&page_size=${size || 20}&filter=${filter || ''}&order_key=${orderBy || ''}`,
        FETCH_TASKS_REQUEST,
        FETCH_TASKS_SUCCESS,
    );
}

export function saveTasksActions(tasksActions) {
    return saveProtectedData(
        `/api/v1/workflows/tasks-actions/`,
        tasksActions,
        SAVE_TASKS_ACTIONS_REQUEST,
        SAVE_TASKS_ACTIONS_SUCCESS,
    );
}

export function fetchSites() {
    return fetchProtectedData(
        `/api/v1/workflows/sites/`,
        FETCH_SITES_REQUEST,
        FETCH_SITES_SUCCESS,
    );
}
