import { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title={title} />
      <div className="flex flex-1 min-h-0">
        <main className="flex-1 overflow-auto bg-gray-50 p-6 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
