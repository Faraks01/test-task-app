import type {Character} from "@/entities/character/model";
import {ReactNode} from "react";

export interface CharacterCardProps {
  character: Character;
  actions?: ReactNode;
}
