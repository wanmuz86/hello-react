import {useState} from 'react'


const LoadingIndicator = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const toggleLoading = () => setIsLoading(!isLoading);
    return (
        <div>
            <h1>Loading Indicator Example</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <p>Data loaded</p>}
            <button onClick={toggleLoading}>
                {
                    isLoading ?
                        'Stop Loading'
                        :
                        'Start Loading'

                }</button>
        </div>
    );
}

export default LoadingIndicator