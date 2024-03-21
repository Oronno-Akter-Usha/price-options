import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({item}) => {
    return (
        <div>
           <p className='flex item-center'><FaCheckCircle className='text-green-500 mr-2' /> {item}</p> 
        </div>
    );
};

Feature.propTypes = {
    item: PropTypes.string
}
export default Feature;