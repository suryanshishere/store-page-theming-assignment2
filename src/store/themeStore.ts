import { themeConfig } from '@/configs/theme.config';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, Specialty } from '@/@types/theme';

// Extend state type to include specialty
type ThemeState = Theme;

// Extend actions to allow setting specialty
type ThemeAction = {
  setSchema: (payload: string) => void;
  setMode: (payload: ThemeState['mode']) => void;
  setSideNavCollapse: (payload: boolean) => void;
  setDirection: (payload: ThemeState['direction']) => void;
  setPanelExpand: (payload: boolean) => void;
  setLayout: (payload: ThemeState['layout']['type']) => void;
  setPreviousLayout: (payload: ThemeState['layout']['previousType']) => void;
  setSpecialty: (payload: Specialty) => void;
};

export const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set) => ({
      ...themeConfig,
      setSchema: (payload) => set(() => ({ themeSchema: payload })),
      setMode: (payload) => set(() => ({ mode: payload })),
      setSideNavCollapse: (payload) =>
        set((state) => ({ layout: { ...state.layout, sideNavCollapse: payload } })),
      setDirection: (payload) => set(() => ({ direction: payload })),
      setPanelExpand: (payload) => set(() => ({ panelExpand: payload })),
      setLayout: (payload) =>
        set((state) => ({ layout: { ...state.layout, type: payload } })),
      setPreviousLayout: (payload) =>
        set((state) => ({ layout: { ...state.layout, previousType: payload } })),
      setSpecialty: (payload) => set(() => ({ specialty: payload })),
    }),
    {
      name: 'theme',
    }
  )
);