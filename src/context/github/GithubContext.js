import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {}, //For one user the initial state is an empty object
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Clear the users from the state
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //Search Users
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const { items } = await response.json(); //We just need itmes object from the api object

    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //Get single user
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const data = await response.json();

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

//Get initial User (for testing)
// const fetchUsers = async () => {
//     setLoading();
//     const response = await fetch(`${GITHUB_URL}/users`, {
//       headers: { Authorization: `token ${GITHUB_TOKEN}` },
//     });

//     const data = await response.json();

//     // setUsers(data);
//     // setLoading(false);
//     dispatch({
//       type: "GET_USERS",
//       payload: data,
//     });
//   };
