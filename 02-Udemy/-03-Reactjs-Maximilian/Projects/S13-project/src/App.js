import UserFinder from "./components/UserFinder";
import UsersContext from "./store/user-context";

const DUMMY_USERS = [
  { id: "u1", name: "Ali" },
  { id: "u2", name: "Fahad" },
  { id: "u3", name: "Saleh" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
