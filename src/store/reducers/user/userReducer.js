import {
  USER_REGISTER,
  USER_REGISTER_ADDRESS,
} from '../../actions/user/actionTypes';

//ESTADO INICIAL DO COMPONENTE
const INITIAL_STATE = {
  auth: {
    authenticated: false,
    user: {
      id: '',
      email: '',
    },
    profile: {
      name: '',
      birthday: '',
      phone: '',
      adress: {
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        uf: '',
        cep: '',
      },
    },
  },
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        auth: {
          authenticated: true,
          user: {
            id: action.user.auth.id,
            email: action.user.profile.email,
          },
          profile: {
            name: action.user.profile.name,
            birthday: action.user.profile.birthday,
            phone: action.user.profile.phone,
          },
        },
      };
    default:
      return state;
  }
}
