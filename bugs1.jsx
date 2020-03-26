// Sample code available on GitHub: https://github.com/kurmasz-SampleCode/CIS371-SampleCode
// Based on an example from Learning React, 2nd Edition by Porcello and Banks.
// This example is in React/recipe1.jsx

const data = [{
    name: "Group of Users 1",
    users: [
        { name: "Jonah Hill" },
        { name: "Adam Sandlar"},
        { name: "Seth Rogen" },
        { name: "Kanye West" },
        { name: "Donald Glover"},
        { name: "Post Malone"}
    ],

},

];

function Ingredient(props) {
    return <li> {props.name} </li>;
}

/* Note:  You would not normally write it this way.  I include this Demo in case it is easier to
   understand than the "real" version below that uses .map */
function IngredientListDemo(props) {
    let list = props.users;
    return <ul className="users" >
        <Ingredient name={list[0].name} key='0' />
        <Ingredient name={list[1].name}  key='1' />
        <Ingredient name={list[2].name}  key='2' />
        <Ingredient name={list[3].name}  key='3' />
    </ul>;
}

function IngredientList(props) {
    return <ul className="users" > {
        props.users.map((item, index) => (
            <Ingredient 
                name={item.name}
                key={index}
            />
        ))}
    </ul>
}

function Instructions(props) {
    return <div className='instructions'>
        <h3>Instructions</h3>
        {props.steps.map((step, index) => (<p key={index}>{step}</p>))}
    </div>;
}

function Recipe(props) {
    return <div>
        <h2 > {props.name} </h2>
        <IngredientList users={props.users} />
        
    </div>;
}

function Menu(props) {
    return <section>
        <h1> {props.title} </h1>
        <div className='recipes' > {props.recipes.map((recipe, index) => (
            <Recipe key={index}
                name={recipe.name}
                users={recipe.users}

            />
        ))}
        </div>
    </section>;
}

ReactDOM.render(
    <Menu recipes={data} title="List of Users" />,
    document.getElementById("main")
);