import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'home'},
    {to: '/me', label: 'me'},
    {to: '/projects', label: 'projects'},
    {to: '/skills', label: 'skilltree'},
    {to: '/work', label: 'work'},
];

const Navigation = () => {
    return (
        <nav className={'navigation'}>
            <ul>
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            end={link.to === '/'}
                            className={({isActive}) => (isActive ? 'is-active' : undefined)}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
