import { WHO } from "./WHO";

export interface INDMedical extends WHO {
  gastrology(): void;
  dental(): void;
  emergencyServices(): void;
}
