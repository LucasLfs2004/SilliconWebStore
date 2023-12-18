import { CLEAR_USER, INITIALIZE_USER, SET_USER } from '../actions/actionTypes';

const initialState = {
  access_token: null,
  data: {
    id: null,
    email: null,
    name: null,
  },
  idSeller: null,
  isAdmin: false,
  isSeller: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_USER:
      console.log('iniciando a porra do user', initialState);
      return initialState;
    case SET_USER:
      console.log(action);
      const dataUser = {
        id: action.payload.person.id,
        email: action.payload.person.email,
        name: action.payload.person.name,
      };
      return {
        ...state,
        access_token: action.payload.access_token,
        data: dataUser,
        idSeller: action.payload.person.id_seller,
        isAdmin: action.payload.person.is_admin,
        isSeller: action.payload.person.is_seller,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
