import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import LazyLoad from 'react-lazy-load'

class SingleAlbum extends React.Component {
    componentDidMount() {
        this.props.getAlbum();
    }

    render() {
        const { users } = this.props;


        console.log(users)
        return (
            < div className="col-lg-12" >
                <h1>Advanced Blog</h1>
                <h3>Album Photos are Given below:</h3>

                <Link to="/" className="btn-primary" >Back</Link>


                {
                    users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <div className="card" key={user.id} style={{ width: "18rem" }}>
                                <LazyLoad height={280} offsetHorizontal={50}>
                                    <img className="card-img-top" src={user.thumbnailUrl} alt="noimage" />
                                </LazyLoad>

                                <div className="card-body">
                                    <p className="card-text">{user.title}</p>
                                </div>
                            </div>

                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div >
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getAlbum: userActions.getSingleAlbum
}

const connectedHomePage = connect(mapState, actionCreators)(SingleAlbum);
export { connectedHomePage as SingleAlbum };