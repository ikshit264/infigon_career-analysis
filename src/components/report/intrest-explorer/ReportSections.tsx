import { JSX } from "react";
import Personality from "./Personality";
// import StrengthWeakness from "./StrengthWeakness";
// import WorkStyle from "./WorkStyle";
// import Characteristics from "./Characteristics";
// import Preferences from "./Preferences";
// import InterPersonalInteraction from "./InterPersonalInteraction";
// import WorkCulture from "./WorkCulture";
// import Role from "./Roles";
// import CaseStudies from "./CaseStudies";
// import FamousPersonalities from "./FamousPersonalities";
// import Recomendation from "./Recomendation";
// import Conclusion from "../Conclusion";
import { IntrestExploreeInteractionStyle, IntrestExplorePreforedWorkEnviornment, IntrestExplorePrefrences, IntrestExploreSkillsAndStrength } from "@/lib/data";
import ListData from "../ListData";
import { MapPin } from "lucide-react";
import Conclusion from "../Conclusion";

export const reportSections: Record<string, JSX.Element> = {
  Personality: <Personality />,
  Prefrences: <ListData Data={IntrestExplorePrefrences} Title={"Prefrences"} />,
  SkillsAndStrength: <ListData Data={IntrestExploreSkillsAndStrength} Title={"Skills And Strength"}/>,
  PreforedWorkEnviornment: <ListData Data={IntrestExplorePreforedWorkEnviornment}  Title={"Prefored Work Enviornment"} icon={MapPin}/>,
  InteractionStyle: <ListData Data={IntrestExploreeInteractionStyle} Title={"Interaction Styles"}/>,
  Conclusion : <Conclusion color="#FF4040" content={"You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths."}/>
};
