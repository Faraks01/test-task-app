import { FC } from 'react';
import { PageLayout } from '@/shared/ui';
import { CharactersList } from '@/widgets/CharactersList/ui';

const Page: FC = () => {
  return (
    <PageLayout title="Characters Feed">
      <CharactersList />
    </PageLayout>
  );
};

export default Page;
