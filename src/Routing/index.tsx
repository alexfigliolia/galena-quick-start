import type { To } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { PageLoadPlugin } from "@figliolia/metrics";
import { NavigationState } from "State/Navigation";

import { AboutRoute } from "./About";
import { ContactRoute } from "./Contact";
import { HomeRoute } from "./Home";

export const Routing = createBrowserRouter([
  HomeRoute,
  AboutRoute,
  ContactRoute,
]);

NavigationState.routeTransition(Routing.state.location.pathname);

const { navigate } = Routing;

// @ts-ignore
Routing.navigate = (to: To | null, opts?: any) => {
  PageLoadPlugin.setTiming();
  const promise = navigate(to, opts);
  if (to !== null) {
    NavigationState.routeTransition(to);
  }
  return promise;
};
