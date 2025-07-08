import { useLocalStorage } from "@/hooks/localstorage";
import { SettingsContext, type Settings } from "@/components/settings/context";
import { useEffect } from "react";

interface SettingsProviderProps {
    children: React.ReactNode;
    initialSettings?: Settings;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children, initialSettings = { theme: 'light' } }) => {
    const [settings, setSettings] = useLocalStorage<Settings>('settings', initialSettings);

    useEffect(() => {
        if (settings.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings.theme]);
  
    return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>;
  };
  