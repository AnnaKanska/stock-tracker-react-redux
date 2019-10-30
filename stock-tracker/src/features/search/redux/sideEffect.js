import { ADD_SEARCH_INPUT } from "./actionTypes";
import { setSuggestionsAction } from "./actions"

function searchSideEffect(action, store, socket) {
    if(action.type === ADD_SEARCH_INPUT) {
        socket.emit("search", store.getState().search.searchInput);
        socket.on("suggestions", suggestions => {
        store.dispatch(setSuggestionsAction(suggestions));
    })
}
}

export default searchSideEffect