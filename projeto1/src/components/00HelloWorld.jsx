//import React from 'react'; (necessario para usar com classes)

/* V0
function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default HelloWorld;
*/

//V1
const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World with arrow function and const!</h1>
        </div>
    );
};

export default HelloWorld;


/*V2
const HelloWorld = () => 
    <div>
        <h1>Hello World with arrow function and const!</h1>
    </div>;

export default HelloWorld;
*/

/*V3
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World with class!</h1>
            </div>
        );
    }
}

export default HelloWorld;
*/




