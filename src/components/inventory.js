import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            isCreate: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit() {
        if(this.state.name !== "" && this.state.description !== "" && !isNaN(Number(this.state.price))) {
            this.props.createItemToInventory({ name: this.state.name, description: this.state.description, price: Number(this.state.price) })
        }
    }
    componentDidMount() {
        if(this.props.match.params && this.props.match.params.id) {
            this.props.fetchInventorybyId(this.props.match.params.id); //Am tring to fetch but it shows CORS error. Hence I used JSON
        } else {
            this.setState({ isCreate: true })
        }
    }
  
    render() {
        const { inventory } = this.props;
        const { isCreate, name, description, price } = this.state;
        return (
            <div className="container-fluid" style={{ height: '100vh', backgroundImage: 'url(https://image.freepik.com/free-vector/top-view-cups-tea-with-tea-pot_52683-32344.jpg)', backgroundPositionX: 'center', backgroundSize: 'cover', overflowY: 'auto'}}>
                <div className="row">
                    <div className="col-12 text-center mb-2 py-3" style={{ backgroundColor: '#8b9f76d1' }}>
                        <h3 className="text-light">Sadguru Amrit-Tulya's</h3>
                        <h2 className="text-warning">Tea Shop</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center py-3">
                        <div className="col-xl-6 col-lg-8 col-10 my-2">
                            <div className="card h-100" style={{ backgroundColor: "transparent"}}>
                                <img src="https://image.freepik.com/free-photo/top-view-cup-chamomile-tea-with-lemon-mint-leaves-sugar-white-surface-horizontal_176474-5080.jpg" className="card-img-top" alt="..."/>
                                {isCreate ?
                                 <div className="card-body" style={{ backgroundColor:"#8b9f76d1"}}>
                                    <form>
                                        <div className="form-group">
                                            <label className="text-light">Name</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-light">Description</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                value={description}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-light">Price</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="price"
                                                value={price}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </form>
                                    <div className="text-center float-right"><button onClick={this.handleSubmit} className="btn btn-light btn-sm text-center px-3">Create</button></div>
                                    <div className="text-center float-left"><Link to="/" className="btn btn-light btn-sm text-center px-3">View All</Link></div>
                                </div> : 
                                 <div className="card-body" style={{ backgroundColor:"#8b9f76d1"}}>
                                    <h5 className="text-white"><b>Name: {inventory.name}</b></h5>
                                    <p className="card-title text-white">Description: {inventory.description}</p>
                                    <p className="card-title text-white">Price :<b className="badge badge-light p-1 mx-2">{inventory.price}</b></p>
                                    <hr/>
                                    <div className="text-center"><Link to="/" className="btn btn-light btn-sm text-center">View All</Link></div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inventory;