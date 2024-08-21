import ProfileCard, { Profile } from './ProfileCard'

// Interface declaration
// Format of object being used in the project
// Typescript

interface User {
  id:number,
  name: string, 
  age: number,
  email: string
}

// How to define a component in React.js
// How to define a functional component in React
// {user:User} -> This component will accept props, the type of props is User

const UserCard: React.FC<{user:User, profile:Profile}> = ({user, profile}) => {
  return (
    // In JSX when you build a component, it needs to be embedded in one HTML element
    <div>
      <h2>User : {user.name}</h2>
      <p>User : {user.age}</p>
      <p>User {user.email}</p>
      <p>The id of user is {user.id}</p>
      <ProfileCard bio={profile.bio} website={profile.website}/>
    </div>
  );
}
// Export the component, to be used in App.tsx
export default UserCard;