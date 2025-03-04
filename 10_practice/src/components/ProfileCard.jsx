
function ProfileCard(props){
    const { name, age, greeting, children }=props
    return (
        <>
            <h2>Name:{name}</h2>
            <p>Age:{age}</p>
            <div>{greeting}</div>
            {/*  greeting in <p> (since it contains a <div>). */}

            <div>{children}</div>{/* child componet k andar k jsx ko ese access kr sakte h with the help of props */}
        </>
    );
}

export default ProfileCard;
