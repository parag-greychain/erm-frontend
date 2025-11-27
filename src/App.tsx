import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { AppLayout } from "./layout";
import { Home, Agents, Chat, ErrorPage, KnowledgeSources } from "./pages";
import { PATHS } from "./shared";
import Projects from "./pages/projects/Projects";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route>
          <Route element={<AppLayout />}>
            <Route index path={PATHS.chat} element={<Chat />} />
            <Route path={`${PATHS.chat}/:chatId`} element={<Chat />} />
            <Route path={PATHS.agents} element={<Agents />} />
            <Route path={PATHS.projects} element={<Projects />} />
            <Route
              path={PATHS.knowledgeSources}
              element={<KnowledgeSources />}
            />
          </Route>
          <Route index path={PATHS.home} element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
