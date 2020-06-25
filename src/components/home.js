import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }
    componentDidMount() {
        this.props.fetchInventories(); //Am tring to fetch but it shows CORS error. Hence I used JSON
    }
  
    deleteItem = (id) => {
        this.props.deleteItemFromInventory(parseInt(id))
    }
    render() {
        const { inventories } = this.props;
        return (
            <div className="container-fluid" style={{ height: '100vh', backgroundImage: 'url(https://image.freepik.com/free-vector/top-view-cups-tea-with-tea-pot_52683-32344.jpg)', backgroundPositionX: 'center', backgroundSize: 'cover', overflowY: 'auto'}}>
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-2 py-3" style={{ backgroundColor: '#8b9f76d1' }}>
                        <h3 className="text-light">Sadguru Amrit-Tulya's</h3>
                        <h2 className="text-warning">Tea Shop</h2>
                    </div>
                    <div className="col-12 text-right my-4">
                        <Link to="/item" className="btn btn-secondary px-4" style={{ backgroundColor: "#8b9f76d1" }}>ADD NEW</Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center py-3">
                        {inventories.map((each, i) =>
                        <div className="col-xl-3 col-sm-6 col-10 my-2" key={i}>
                            <div className="card h-100" style={{ backgroundColor: "transparent"}}>
                                <img src="https://image.freepik.com/free-photo/top-view-cup-chamomile-tea-with-lemon-mint-leaves-sugar-white-surface-horizontal_176474-5080.jpg" className="card-img-top" alt="..."/>
                                
                                <div className="card-body" style={{ backgroundColor:"#8b9f76d1"}}>
                                    <h5 className="text-white"><b>Name: {each.name}</b></h5>
                                    <p className="card-title text-white">Description: {each.description}</p>
                                    <p className="card-title text-white">Price :<b className="badge badge-light p-1 mx-2">{each.price}</b></p>
                                    <hr/>
                                    <div className="row">
                                        <div className="col"><Link to={`/item/${each.id}`} className="btn btn-outline-light w-100">View</Link></div>
                                        <div className="col"><button className="btn btn-outline-danger w-100" onClick={() => this.deleteItem(each.id)}>Delete</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;