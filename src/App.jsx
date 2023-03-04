import ChatRoom from "./pages/ChatRoom"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          } />
      </Routes>
    </AuthProvider>
  )
}

export default App
