import react,{useState} from 'react';

const ConditionalRendering: React.FC = () => {

    //Example of declaring state by specifying the data type boolean (TS)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // Creating a function in JS
    const toggleLogin = () => {
        // call the setter of isLoggedIn, set the value to the reverse of isLoggedInd
        // isLoggedIn = !isLoggedIn (Our normal Java code)
        setIsLoggedIn(!isLoggedIn);
    }
    return (

        <div>
            <h1>Conditional Rendering Example</h1>
            {
                isLoggedIn ?
                <h2>Welcome back</h2> :
                <h2>Please log in</h2>
            }
            <button onClick={toggleLogin}>
                {
                    isLoggedIn ? 
                    "Log Out" :
                    "Log In"
                }
            </button>
        </div>
    );
}
export default ConditionalRendering;