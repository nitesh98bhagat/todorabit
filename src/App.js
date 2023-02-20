import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import TodoProvider from "./Contexts/TodoProvider";
import UserProvider from "./Contexts/UserProvider";
import "./index.css";
import PrivacyPolicy from "./Privacy-policy";
import ErrorPage from "./Routes/ErrorPage";
import Home from "./Routes/Home";
import RootLayout from "./Routes/RootLayout";
import Settings from "./Routes/Settings";
import TodoPage from "./Routes/TodoPage";
import SigninPage from "./SigninPage";
import TermsOfUse from "./Terms-of-use";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          loader: () => {
            return redirect("todo/Home");
          },
          element: <Home />,
        },

        {
          path: "todo/:name",
          element: <TodoPage />,
        },

        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/terms-of-use",
      element: <TermsOfUse />,
    },
    {
      path: "/privacy-policies",
      element: <PrivacyPolicy />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
  ]);

  return (
    <UserProvider>
      <TodoProvider>
        <div className="flex flex-row   bg-neutral-900 ">
          <RouterProvider router={router} />
        </div>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
