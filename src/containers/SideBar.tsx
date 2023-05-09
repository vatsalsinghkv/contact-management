import { LinkType } from '../lib/utils/types';
import { NavLink } from 'react-router-dom';

type Props = {
  links: LinkType[];
  className?: string;
};

const SideBar = ({ links, className }: Props) => {
  return (
    <aside className={`${className} bg-bg text-text p-3 py-5 space-y-2`}>
      {links.map(({ name, url }) => (
        <NavLink
          key={url}
          to={url}
          className='block p-5 py-2 hover:bg-bg-secondary rounded hover:text-text-light [&.active]:text-white [&.active]:bg-accent'
        >
          {name}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
