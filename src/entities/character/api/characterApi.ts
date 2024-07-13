import useSWR from 'swr';
import { apiInstance } from '@/shared/api'
import type {CharacterDTO} from "@/entities/character/api";
import type {Character} from "@/entities/character/model";
import {mapCharacter} from "@/entities/character/lib";

const CHARACTER_PATH_SEGMENT = '/people';

const characterApi = {
  useGetCharacter: (id: number) => {
    return useSWR(`${CHARACTER_PATH_SEGMENT}/${id}/`, (url: string) => (
      apiInstance
        .get<CharacterDTO>(url)
        .then<Character>(({ data }) => mapCharacter(data))
    ));
  },

  useGetCharactersList: (page: number = 1, search: string = '') => {
    return useSWR(`${CHARACTER_PATH_SEGMENT}/?page=${page}&search=${search}`, (url: string) => (
      apiInstance
        .getList<CharacterDTO[]>(url)
        .then(({ data }) => ({
          ...data,
          results: data.results.map(mapCharacter)
        }))
    ));
  },
};

export const { useGetCharacter, useGetCharactersList } = characterApi;