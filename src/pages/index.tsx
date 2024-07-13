import {Route, Routes} from "react-router-dom";
import {CharactersFeedPage} from "@/pages/characters-feed/ui";

export default function Pages() {
  return (
    <Routes>
      <Route index element={<CharactersFeedPage/>} />
    </Routes>
  );
}