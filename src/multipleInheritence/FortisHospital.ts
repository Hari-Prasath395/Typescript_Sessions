import { INDMedical } from "./INDMedical";
import { Medical } from "./Medical";
import { UKMedical } from "./UKMedical";
import { USMedical } from "./USMedical";

export class FortisHospital
  extends Medical
  implements INDMedical, UKMedical, USMedical
{
  gastrology(): void {
    console.log("FH-gastro services....");
  }
  dental(): void {
    console.log("FH-dental services....");
  }
  physiotherepy(): void {
    console.log("FH-physio services....");
  }
  cardiology(): void {
    console.log("FH-cardio services....");
  }
  oncology(): void {
    console.log("FH-oncology services....");
  }
  pediatrics(): void {
    console.log("FH-pedia services....");
  }

  emergencyServices(): void {
    console.log("FH-Emergency Services...");
  }

  covidVaccinations(): void {
    console.log("FH ---CovidVaccination Services...");
  }
}
