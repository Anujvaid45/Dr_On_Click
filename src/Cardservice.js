import "./Cardservice.css";
const Cardservice = () => {
    return (
        <div className="box">
            <div>
                <img src="./hospital1.jpeg" alt="image1"/>             
                <div className="text">
                    <p>Hello sir</p>
                </div>
            </div>

            <div>
                <img src="https://source.unsplash.com/random/?politician" alt="image2"/>
            </div>

            <div>
                <img src="https://source.unsplash.com/random/?celebrities" alt="image3"/>
            </div>
        </div>
    );
}

export default Cardservice;