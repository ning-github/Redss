// note that the state here is the piece of app state that this reducer handles
// eg activeBook
export default function (state, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        // default to return what it currently already was
        default:
            // would just return whatever activeBook currently already was
            return state;
    }
}
