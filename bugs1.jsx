console.log("Put your JSX code here");
const data = [{
    name: "List of users",
    userlist: [
        { name: "Jason Burrow", age: "25", occupation: "Software Developer" },
        { name: "Brandon Hammell", age: "24", occupation: "Journalist"},
        { name: "Jordan Howard", age: "27", occupation: "Networking Analyst" },
        { name: "Lorin Ashton", age: "31", occupation: "Record Producer"},
        { name: "Mike Evans", age: "26", occupation: "Sports Manager" },
        { name: "Jeff Dobak", age: "35", occupation: "Accountant" }
    ],
} 
];

function User(props) {
    return <li> {props.age} {props.occupation} {props.name} </li>;
}
function UserListDemo(props) {
    let list = props.UserList;
    return <ul className="userlist" >
        <User age={list[0].age} occupation={list[0].occupation} name={list[0].name} key='0' />
        <User age={list[1].age} occupation={list[1].occupation} name={list[1].name} key='1' />
        <User age={list[2].age} occupation={list[2].occupation} name={list[2].name} key='2' />
        <User age={list[3].age} occupation={list[3].occupation} name={list[3].name} key='3' />
    </ul>;
}

function UserList(props) {
    return <ul className="userlist" > {
        props.userlist.map((item, index) => (
            <User age={item.age}
                occupation={item.occupation}
                name={item.name}
                key={index}
            />
        ))}
    </ul>
}


function Userdata(props) {
    return <div>
        <h2 > {props.name} </h2>
        <UserList userlist={props.userlist} />
        <Instructions steps={props.steps} />
    </div>;
}

function Menu(props) {
    return <section>
        <h1> {props.title} </h1>
        <div className='usersdata' > {props.usersdata.map((userdata, index) => (
            <Recipe key={index}
                name={userdata.name}
                userlist={userdata.userlist}
                steps={userdata.steps}
            />
        ))}
        </div>
    </section>;
}

ReactDOM.render(
    <Menu usersdata={data} title="List of Users" />,
    document.getElementById("main")
);