import { WHO } from "./WHO";

export interface USMedical extends WHO {
  oncology(): void;
  pediatrics(): void;
  emergencyServices(): void;
}
