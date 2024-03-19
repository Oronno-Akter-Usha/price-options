const Link = ({routes}) => {
    return (
        <li className="mr-10">
            <a href={routes.path}>{routes.name}</a>
        </li>
    );
};

export default Link;