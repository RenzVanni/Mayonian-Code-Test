export type OptionProp = {
  search?: boolean;
  start?: boolean;
  new?: boolean;
  slot?: boolean;
};

export type SearchProp = {
  search: string;
};
export type GameProp = {
  id: number;
  image: string;
  favorite: boolean;
  name: string;
};

export type GlobalProp = {
  game: GameProp[];
  setGame: React.Dispatch<React.SetStateAction<GameProp[]>>;
  option: OptionProp;
  setOption: React.Dispatch<React.SetStateAction<OptionProp>>;
  search: SearchProp;
  setSearch: React.Dispatch<React.SetStateAction<SearchProp>>;
};

export const data: GlobalProp = {
  game: [{ id: 0, image: "", favorite: false, name: "" }],
  setGame: () => {},
  option: { search: false, start: true, new: false, slot: false },
  setOption: () => {},
  search: { search: "" },
  setSearch: () => {},
};
