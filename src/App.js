import HPFrame from "./components/Homepage/HPFrame";
import HomePage from "./pages/HomePage";
import { Helmet } from "react-helmet";

function App() {

  function getUserData() {
    // axios.get(`/user/data`)
    //   .then((result) => {
    //     let resName = result.data.name
    //     if (resName === undefined) {
    //       dispatch(logOut())
    //     } else {
    //       setUserData(result.data)
    //       dispatch(logIn())
    //     }
    //   });
  }

  return (
    <div>
      <Helmet>
        <title>Trust.</title>
      </Helmet>

      <HPFrame />
    </div>
  );
}

export default App;
