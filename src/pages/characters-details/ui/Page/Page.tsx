import {FC} from 'react'
import { useParams } from 'react-router-dom';
import {PageLayout} from "@/shared/ui";
import {CharacterDetailsView} from "@/widgets/CharacterDetailsView/ui";
import {Character} from "@/entities/character/model";

const Page: FC = () => {
  const { id } = useParams<Record<keyof Pick<Character, 'id'>, string>>();

  return (
    <PageLayout title={`Character #${id} Details`}>
      <CharacterDetailsView
        characterId={Number(id)}
      />
    </PageLayout>
  )
}

export default Page
