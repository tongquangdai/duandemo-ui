import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
             <nav className={cx('nav_wrap')>
             
             </nav>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;
