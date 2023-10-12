const initialState = {
    offers: [], // List of offers
    loading: false, // Shows if the offers are being loaded
    error: null, // Holds error information, if any
};

export const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_OFFERS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_OFFERS_SUCCESS':
            return {
                ...state,
                offers: action.payload, // offers data returned from API
                loading: false,
            };
        case 'FETCH_OFFERS_FAILURE':
            return {
                ...state,
                error: action.payload, // error message returned from API
                loading: false,
            };
        // Add more cases for other offers-related actions
        default:
            return state;
    }
};
