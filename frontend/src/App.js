import Signin from "./components/signin";
import { AuthProvider } from "./context/authContext";
// import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Signin/>
      </AuthProvider>
    </div>
  );
}

export default App;
