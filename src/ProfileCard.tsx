export interface Profile {
    bio:string;
    website:string;
  }
  
  const ProfileCard : React.FC<Profile> = ({bio, website}) => {
    return (
      <div>
      <p>Bio : {bio}</p>
      <p>Website : {website}</p>
      </div>
    )
  }
  export default ProfileCard;