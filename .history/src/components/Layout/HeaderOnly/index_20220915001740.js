import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
