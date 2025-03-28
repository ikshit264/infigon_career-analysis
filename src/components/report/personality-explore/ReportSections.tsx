import Personality from "./Personality";
import StrengthWeakness from "./StrengthWeakness";
import WorkStyle from "./WorkStyle";
import { JSX } from "react";
import Characteristics from "./Characteristics";

export const reportSections: Record<string, JSX.Element> = {
  Personality: <Personality />,
  Characteristics: <Characteristics />,
  StrengthWeaknes: <StrengthWeakness />,
  WorkStyle: <WorkStyle />,
};
