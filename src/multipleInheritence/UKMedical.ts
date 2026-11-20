import { WHO } from "./WHO";

export interface UKMedical extends WHO {
  physiotherepy(): void;
  cardiology(): void;
  emergencyServices(): void;
}
