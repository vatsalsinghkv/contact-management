import { ReactNode } from 'react';
import { SideBar } from '.';
import { LinkType } from '../lib/utils/types';
import { useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const location = useLocation();

  const links: LinkType[] = [
    { name: 'Contacts', url: '/' },
    { name: 'Charts and Maps', url: '/chart' },
    { name: 'Create Contact', url: '/form' },
  ];

  const mapPathToName = (path: string) =>
    links.find((link) => link.url.includes(path))?.name;

  return (
    <div className='min-h-screen w-full grid grid-cols-[theme(spacing.64)_1fr] grid-rows-[auto_1fr] grid-flow-dens overflow-hidden'>
      <SideBar links={links} className='row-start-2 row-span-1' />
      <header className='col-start-1 col-span-2 py-5 bg-white text-center text-text-dark'>
        <h1 className='text-xl capitalize'>
          {mapPathToName(location.pathname.split('/')[1])}
        </h1>
      </header>
      <main className='p-5 bg-bg-light w-full'>{children}</main>
    </div>
  );
};

export default Layout;
