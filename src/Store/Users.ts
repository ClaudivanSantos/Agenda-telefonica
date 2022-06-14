import create from "zustand";

export interface UserType {
  id: number;
  name: string;
  email: string;
}

interface State {
  users: UserType[];
  addUser: (user: UserType) => void;
  clearUsers: () => void;
  removeUser: (user: UserType) => void;
}

export const useUserStore = create<State>((set) => ({
  users: [],
  removeUser: (user) => {
    set((state: State) => ({
      users: state.users.filter((u) => u.id !== user.id),
    }));
  },
  addUser: (user: UserType) => {
    set((state) => ({ users: [...state.users, user] }));
  },
  clearUsers: () => {
    set(() => ({ users: [] }));
  },
}));
