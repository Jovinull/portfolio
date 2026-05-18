import type { LucideIcon } from "lucide-react";
import {
  ServerCog,
  BrainCircuit,
  Layers,
  MonitorPlay,
  FlaskConical,
} from "lucide-react";
import type { ExperienceIconKey } from "@/lib/experience";

export const experienceIconMap: Record<ExperienceIconKey, LucideIcon> = {
  serverCog: ServerCog,
  brainCircuit: BrainCircuit,
  layers: Layers,
  monitorPlay: MonitorPlay,
  flaskConical: FlaskConical,
};
