import { create } from "zustand";

interface RouteStore {
  route: string;
  setRoute: (route: string) => void;
}

export const useRouteStore = create<RouteStore>((set) => ({
  route: "",
  setRoute: (route) => set({ route }),
}));
