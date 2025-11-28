import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { AppLayout } from "./layout";
import { Home, Agents, Chat, ErrorPage, KnowledgeSources, ProjectDetails } from "./pages";
import { PATHS } from "./shared";
import Projects from "./pages/projects/Projects";
import AuthLayout from "./layout/auth/AuthLayout";
import Login from "./pages/auth/login/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route index path={PATHS.login} element={<Login />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route index path={PATHS.chat} element={<Chat />} />
          <Route path={`${PATHS.chat}/:chatId`} element={<Chat />} />
          <Route path={PATHS.agents} element={<Agents />} />
          <Route path={PATHS.projects} element={<Projects />} />
          <Route path={PATHS.knowledgeSources} element={<KnowledgeSources />} />
        </Route>
        <Route index path={PATHS.home} element={<Home />} />
        <Route index path={PATHS.projectDetails} element={<ProjectDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
