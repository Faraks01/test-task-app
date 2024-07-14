import { ReactNode } from 'react';

export interface MediaCardProps {
  imageUrl?: string;
  imageTitle?: string;
  content?: ReactNode;
  actions?: ReactNode;
}
