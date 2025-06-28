import { Badge } from "@/components/ui/badge";

type WorkMode = "full-time" | "part-time" | "full-remote" | "hybrid";

export type WorkModeProps = {
  workMode: WorkMode;
}

export const WorkMode = ({ workMode }: WorkModeProps) => {
  return <Badge variant="outline">{getWorkModeLabel(workMode)}</Badge>;
};

function getWorkModeLabel(workMode: WorkMode) {
  switch (workMode) {
    case "full-time":
      return "Full-time";
    case "part-time":
      return "Part-time";
    case "full-remote":
      return "Full-remote";
    case "hybrid":
      return "Hybrid";
  }
}