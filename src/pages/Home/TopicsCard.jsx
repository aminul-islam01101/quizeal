import { Link } from 'react-router-dom';

const TopicsCard = ({ item: { name, logo, total, id } }) => (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>{total}</h4>

                <div className="card-actions justify-end">
                    <Link to={`/home/${id}`}>
                        <button type="button" className="btn btn-primary">
                            start
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default TopicsCard;
