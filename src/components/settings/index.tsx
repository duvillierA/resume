import { useContext } from "react";
import { SettingsContext } from "@/components/settings/context";

export const useSettings = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  return [settings, setSettings] as const;
};
