import Link from 'next/link';
import style from './page.module.css';

function ContactsLayout({ children }) {
  return (
    <>
      <nav>
        <h3>contacts nav</h3>
        <ul className={style.unordered}>
          <Link href='/contacts/bookmarked'>Bookmarked</Link>
          <Link href='/contacts/missed'>Missed calls</Link>
          <Link href='/contacts/message'>Message</Link>
        </ul>
      </nav>
      <h2>Contacts page</h2>
      {children}
    </>
  );
}

export default ContactsLayout;