import {Route, Routes} from "react-router-dom";
import {ROUTE_CONSTANTS} from "@/shared/config";
import {CharactersFeedPage} from "@/pages/characters-feed/ui";
import {CharactersDetailsPage} from "@/pages/characters-details/ui";

export default function Pages() {
  return (
    <Routes>
      <Route index element={<CharactersFeedPage/>} />
      <Route path={ROUTE_CONSTANTS.CHARACTER_DETAILS} element={<CharactersDetailsPage/>} />
    </Routes>
  );
}