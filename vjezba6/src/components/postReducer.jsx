export const POCETNO_STANJE = {
  loading: true,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: false,
        post: {},
        error: false,
      };
    case "FETCH_USPJEH":
      return {
        ...state,
        loading: true,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: true,
      };
    default:
      return state;
  }
};
