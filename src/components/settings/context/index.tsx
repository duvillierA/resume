import { createContext } from "react";

export type Settings = {
  theme: 'light' | 'dark';
};

export const SettingsContext = createContext<{
  settings: Settings;
  setSettings: (settings: Settings) => void;
}>({ settings: { theme: 'light' }, setSettings: () => {} });
