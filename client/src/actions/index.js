export const Actions = {
    SET_STREAMS: "SET_STREAMS",
    SELECTED_STREAM: "SELECTED_STREAM",
    EDIT_STREAM: "EDIT_STREAM",
    DELETE_STREAM: "DELETE_STREAM",
    CREATE_STREAM:"CREATE_STREAM",
    EDIT_STREAM:"EDIT_STREAM",
    LOAD_DATA:"LOAD_DATA"
}

export const setStreams = (streams) => {
    return{
    type:Actions.SET_STREAMS,
    payload: streams 
    };
};

export const selectedStream = (streams) => {
    return {
        type: Actions.SELECTED_STREAM,
        payload: streams
    };
};

export const createStream = (streams) => {
    return {
        type: Actions.CREATE_STREAM,
        payload: streams
    }
}
export const editStream = (streams) => {
    return {
        type: Actions.EDIT_STREAM,
        payload: streams
    }
}

export const deleteData = (streams) => {
    return {
        type: Actions.DELETE_STREAM,
        payload: streams
    }
}


export default {setStreams, selectedStream, createStream};