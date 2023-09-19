import React from 'react'
import { RouterProvider } from 'react-router'
import routes from './router'
import ChatBox from './component/chatbox/Chatbox'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/config.firebase'
import FirebaseAuth from './component/demo-firebase/SigninFirebase'

const App = () => {
  const [user] = useAuthState(auth)
  return (
    <div style={{ cursor: "pointer" }}>
      {/* <RouterProvider router={routes}/> */}
      {!user ? (
        <FirebaseAuth />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  )
}

export default App




