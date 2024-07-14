import useSWR, {useSWRConfig} from 'swr';
import { apiInstance } from '@/shared/api'
import type {CharacterDTO} from "@/entities/character/api";
import type {Character} from "@/entities/character/model";
import {mapCharacter} from "@/entities/character/lib";

const CHARACTER_PATH_SEGMENT = '/people';

const characterApi = {
  useGetCharacter: (id: number) => {
    return useSWR<Character, Error>(`${CHARACTER_PATH_SEGMENT}/${id}/`, (url: string) => {
      const cachedData = sessionStorage.getItem(url);

      if (cachedData) {
        return JSON.parse(cachedData);
      }

      return apiInstance
        .get<CharacterDTO>(url)
        .then<Character>(({ data }) => mapCharacter(data))
    });
  },

  usePatchCharacter: (id: number) => {
    const key = `${CHARACTER_PATH_SEGMENT}/${id}/`;
    const cachedData = sessionStorage.getItem(key);
    const { mutate } = useSWRConfig();

    return {
      patch: (payload: Partial<Character>) => {
        sessionStorage.setItem(key, JSON.stringify(cachedData ? {
          ...JSON.parse(cachedData),
          ...payload
        } : payload));

        // tell all SWRs with this key to revalidate
        return mutate(key)
      }
    }
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

export const { useGetCharacter, useGetCharactersList, usePatchCharacter } = characterApi;