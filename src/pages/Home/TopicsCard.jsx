import { Link } from 'react-router-dom';
import NoImage from '../../../public/Image_not_available.png';

const TopicsCard = ({ item: { name, logo, total, id } }) => (
    <div>
        <div className="card h-full rounded w-full bg-base-100 shadow-xl">
            <figure className="bg-slate-200">
                <img src={logo || NoImage} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl p-2 bg-slate-100 shadow-lg mb-5">{name}</h2>
                <div className="flex justify-between">
                    <h4 className="">Total Quiz :{total}</h4>
                    <div className="card-actions justify-end">
                        <Link to={`/quiz/${id}`}>
                            <button
                                type="button"
                                className="button color-primary hover:bg-[#0097C3] border-0 "
                            >
                                Play
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TopicsCard;
