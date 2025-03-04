
//!Passing JSX as Props in React

import ProfileCard from "./ProfileCard";
function Profile() {
  return (
    <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard name="alice" age={30} greeting={
          <div>
            <strong>Hi alice,have a good day</strong>
          </div>
        }>
          <p>Hobbies:coding</p>
          <button>Contact</button>
        </ProfileCard>

        <ProfileCard name="ken" age={29} greeting={
          <div>
            <strong>Hi ken,have a good day</strong>
          </div>
        }>
          <p>Hobbies:Gaming,cooking</p>
          <button>Contact</button>
        </ProfileCard>
    </div>
  )
}

export default Profile

