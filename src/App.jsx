import backgroundSVG from './assets/bbblurry.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Converter from './components/Converter';

function App() {
    const svgBackgroundStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundSVG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={svgBackgroundStyle}>
            <div className='container'>
                <Converter />
            </div>
        </div>
    );
}


export default App;
