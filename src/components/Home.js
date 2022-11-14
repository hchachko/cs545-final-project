import './App.css';
import { Grid} from '@mui/material';
import hobokenMap from './Images/hobokenMap.png';

function Home () {
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={4} key="Parks">
                <div className='homeCard'>
                    <div className='card-body'>
                        <div className='parkCard' key="Park_1">
                            <div className='card-body'>
                                <h5 className='card-title'> Sample Park </h5>
                                <br />
                                <img src="https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg" alt="Park img" className="parkImg"></img>
                                <br />
                            </div>
                        </div>
                        <div className='parkCard' key="Park_2">
                            <div className='card-body'>
                                <h5 className='card-title'> Sample Park 2</h5>
                                <br />
                                <img src="https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg" alt="Park img" className="parkImg"></img>
                                <br />
                            </div>
                        </div>
                        <div className='parkCard' key="Park_3">
                            <div className='card-body'>
                                <h5 className='card-title'> Sample Park 30p-</h5>
                                <br />
                                <img src="https://cdn.britannica.com/82/117982-050-D4295893/Frank-Sinatra-Park-Hoboken-NJ.jpg" alt="Park img" className="parkImg"></img>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={8} key="Hoboken_Map">
                <div className='homeCard'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Hoboken Map:
                        </h5>
                        <img src={hobokenMap} alt="Map" className = "mapImg"></img>
                        <br />
                    </div>
                </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;