import PropTypes from "prop-types";
//1.yöntem
// function User(props){
//     return (
//         <h1>Merhaba {props.name} {props.surname}</h1>
//     )
// }

//2.yöntem
function User({ name, surname, age, friends }) {
    return (
        <>
            <h1>{`Merhaba ${name}  ${surname} ${age}`}</h1>

            {
                friends.map((friend, index) => {
                    return <div key={index}>{friend}</div>
                })
            }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.number
        ]
    ),
    friends: PropTypes.array
}

User.defaultProps= {
    name:"volkan",
}

export default User;  