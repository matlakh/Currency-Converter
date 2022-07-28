const handlers = {
    [GET_ROOMS]: (state, { payload }) => ({...state, rooms: payload, loading: false, disable: false }),
    [SET_LOADING]: state => ({...state, loading: true }),
    [GET_ROOM]: (state, { payload }) => ({...state, room: payload, loading: false }),
    DEFAULT: state => state
}


export const roomsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}