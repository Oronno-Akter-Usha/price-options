import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>

                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, i) => <Feature key={i} item ={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-500 w-full py-3 font-bold rounded-lg hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;