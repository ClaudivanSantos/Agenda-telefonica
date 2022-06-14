import { useUserStore } from "../Store/Users";

export function Home() {
  const {users, removeUser} = useUserStore(state => state);

  function deleteUser(index: number){
    let TmpArray = [...users]
    TmpArray.splice(index, 1)
  }

  return (
    <>
      {users?.map((user) => (
        <p key={Math.random()}>
          {user.name} | {user.email} 
          <button onClick={()=> removeUser(user)}>Remover</button>
        </p>
        
      ))}
    </>
  );
}
