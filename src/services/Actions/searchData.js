export const searchDataFn = searchDataInputValue => {
    return {
        type: 'DATA_SEARCH',
        payload: searchDataInputValue,
    };
}