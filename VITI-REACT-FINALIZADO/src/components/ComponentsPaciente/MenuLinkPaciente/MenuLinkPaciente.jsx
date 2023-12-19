import { NavLink } from 'react-router-dom';
import styles from './MenuLinkPaciente.module.css';

export default function MenuLinkPaciente({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}