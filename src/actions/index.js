export default function selectBook(book) {
    // return an action object that has type
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
