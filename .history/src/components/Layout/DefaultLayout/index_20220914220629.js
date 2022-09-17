import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from '~/components/Layout/components/Header/Header.module.scss';
import Sidebar from './Sidebar';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
