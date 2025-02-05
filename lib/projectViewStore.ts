import { create } from "zustand";

type ViewStore = {
  inProjectView: string | null;
  setInProjectView: (project: string | null) => void;
  fullScreenProject: string | null;
  setFullScreenProject: (project: string | null) => void;
};

export const useProjectViewStore = create<ViewStore>((set) => ({
  inProjectView: null,
  setInProjectView: (project: string | null) => set({ inProjectView: project }),
  fullScreenProject: null,
  setFullScreenProject: (project: string | null) =>
    set({ fullScreenProject: project }),
}));
