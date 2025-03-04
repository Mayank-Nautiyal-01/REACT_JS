# Profile Card Challenge

## Overview

This React application demonstrates the use of **props** by building a simple profile card system. Each profile card displays a user’s name, age, and a personalized greeting message. Additionally, it utilizes **props.children** to allow for flexible content inside each profile card.

---

## Passing JSX as Props in React

### What is JSX as Props?
JSX (JavaScript XML) is commonly used in React to define UI components. React allows us to pass JSX elements as props, making components more flexible and reusable.

### Why Use JSX as Props?
- It enables passing **structured content** like headings, paragraphs, or even other components.
- It allows for **better composition**, letting us define UI elements inside parent components while passing them down as props.
- It keeps components **dynamic** and **customizable** without modifying the component itself.

### How is JSX Passed as a Prop?
JSX is passed just like any other prop, but inside curly braces `{}`:

```jsx
<ProfileCard 
  name="Alice" 
  age={30} 
  greeting={<div><strong>Hi Alice, have a good day!</strong></div>}
>
  <p>Hobbies: Coding</p>
  <button>Contact</button>
</ProfileCard>
```

In the `ProfileCard` component, we accept this JSX prop and render it using `{greeting}`:

```jsx
function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <div>{greeting}</div> {/* JSX prop is rendered here */}
      <div>{children}</div> {/* Children prop is used for extra content */}
    </>
  );
}
```

This ensures that **customized JSX content** can be displayed dynamically within the component.

---

## Features

- **Props Usage:** Passes the user's name, age, and a personalized greeting message as JSX props.
- **Children Prop:** Allows additional content like hobbies, buttons, or other elements inside each profile card.
- **Component-Based Structure:** Separates the main profile component and the profile card component.



### 1. **App.js**

This is the root component that imports and renders the **Profile** component.

```jsx
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export default App;
```

### 2. **Profile.js**

This component renders multiple `ProfileCard` components with different user data.

```jsx
import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard name="Alice" age={30} greeting={<div><strong>Hi Alice, have a good day!</strong></div>}>
        <p>Hobbies: Coding</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard name="Ken" age={29} greeting={<div><strong>Hi Ken, have a good day!</strong></div>}>
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;
```

### 3. **ProfileCard.js**

This component receives props and displays the user’s profile details.

```jsx
function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <div>{greeting}</div>
      <div>{children}</div>
    </>
  );
}

export default ProfileCard;
```

---
