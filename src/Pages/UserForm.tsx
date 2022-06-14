import { useState } from "react";
import { useUserStore } from "../Store/Users";

export function UserForm() {
  const addUser = useUserStore((state) => state.addUser);
  const clearUser = useUserStore((state) => state.clearUsers);

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function enviaDados() {
    setId(id+1)
    addUser({
      id,
      name,
      email,
    });
  }
  return (
    <>
      <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={enviaDados}>Criar usuario</button>
      <button onClick={clearUser}>Remover usuarios</button>
      
    </>
  );
}
