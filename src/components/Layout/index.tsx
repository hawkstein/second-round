import type { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Link } from 'react-router-dom';
import lenderLogo from '/lender-logo.png';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <header>
        <Link to="/">
          <img src={lenderLogo} alt="Lender logo" />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
