import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('nav-wrap')}>
                <h1>Header</h1>
                <div className={cx('logo')}>
                <a href="#" className={cx('logo')}>
                    <img src={images.logo} alt="logo">
                  </a>
                </div>
                
      </div>
           
        </header>
    );
}

export default Header;
