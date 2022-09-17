import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1>Header</h1>
            <div className={cx('inner')}>{/* <div className={cx('logo')}></div> */}</div>
        </header>
    );
}

export default Header;
