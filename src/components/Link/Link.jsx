import PropTypes from 'prop-types';
const Link = ({routes}) => {
    return (
        <li className="mr-10 px-6  hover:bg-[#0000ff4d] py-2 rounded-sm">
            <a href={routes.path}>{routes.name}</a>
        </li>
    );
};

Link.propTypes = {
    routes: PropTypes.object
}

export default Link;