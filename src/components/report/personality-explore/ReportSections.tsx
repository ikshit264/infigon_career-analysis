import Personality from "./Personality";
import StrengthWeakness from "./StrengthWeakness";
import WorkStyle from "./WorkStyle";
import { JSX } from "react";
import Characteristics from "./Characteristics";
import Preferences from "./Preferences";
import InterPersonalInteraction from "./InterPersonalInteraction";
import WorkCulture from "./WorkCulture";
import Role from "./Roles";
import CaseStudies from "./CaseStudies";
import FamousPersonalities from "./FamousPersonalities";
import Recomendation from "./Recomendation";
import Conclusion from "../Conclusion";
import { ConclussionData } from "@/lib/data";

export const reportSections: Record<string, JSX.Element> = {
  Personality: <Personality />,
  Characteristics: <Characteristics />,
  StrengthWeaknes: <StrengthWeakness />,
  WorkStyle: <WorkStyle />,
  Preferences: <Preferences/>,
  InterPersonalInteraction : <InterPersonalInteraction/>,
  WorkCulture : <WorkCulture/>,
  Roles : <Role/>,
  CaseStudies : <CaseStudies/>,
  FamousPersonalities : <FamousPersonalities/>,
  Recomendation : <Recomendation/>,
  Conclusion : <Conclusion color="#0000C0" content={ConclussionData}/>
};
