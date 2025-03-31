import { JSX } from "react";
import Conclusion from "../Conclusion";
import { ConclussionData, LearningStyleCharacterstics } from "@/lib/data";
import LearningStyle from "./LearningStyle";
import ListData from "../ListData";
import { ThumbsUp } from "lucide-react";
import { TreePine } from 'lucide-react';
import ListInBox from "./ListInBox";

export const reportSections: Record<string, JSX.Element> = {
  LearningStyle: <LearningStyle />,
  Characteristics: <ListData Data={LearningStyleCharacterstics} Title={"Characterstics"} />,
  Preferences: <ListData Data={LearningStyleCharacterstics} icon={ThumbsUp} Title={"Preferences"} />,
  Strengths: <ListData Data={LearningStyleCharacterstics} Title={"Strengths"} />,
  Enviornment: <ListData Data={LearningStyleCharacterstics} icon={TreePine} Title={"Learning Enviornment"} />,
  WorkPlaceManifestation: <ListData Data={LearningStyleCharacterstics} Title={"WorkPlace Manifestation"} />,
  Influence: <ListInBox Data={LearningStyleCharacterstics} Title={"Influence on Job Performance, Communication and Learning Preferences"} />,
  Suggestion : <ListInBox Data={LearningStyleCharacterstics} Title={"Suggestions for Incorporating Learning Techniques"} />,
  AdviceStatergies: <ListInBox BgColor="#00AF00" Data={LearningStyleCharacterstics} Title={"Advice/Statergies"} />,
  Conclusion : <Conclusion color="#0000C0" content={ConclussionData}/>
};
