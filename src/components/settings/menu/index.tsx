
import { Button } from "@/components/ui/button";
import { Printer, Sun } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib";
import { useSettings } from "@/components/settings";
import { usePrint } from "@/hooks/print";

export const SettingsMenu: React.FC<ComponentProps<"ul">> = ({ className, ...props }) => {
  const [settings, setSettings] = useSettings();
  const { print } = usePrint();

  return (
    <ul {...props} className={cn("flex justify-end gap-2", className)}>
      <li>
        <Button title="Print page" variant="default" size="sm" onClick={() => print()}>
          <Printer /> Print
        </Button>
      </li>
      <li>
        <Button title="Toggle theme" variant="default" size="sm" onClick={() => setSettings({ theme: settings.theme === 'light' ? 'dark' : 'light' })}>
          <Sun /> Theme
        </Button>
      </li>
    </ul>
  );
};