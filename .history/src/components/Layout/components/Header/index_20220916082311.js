import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}></input>
                    {/* Clear */}
                    <button className={cx('clear')}></button>
                    {/* Loading */}
                    <button className={cx('loading')}></button>
                    {/* Search_btn */}
                    <button className={cx('search_btn')}></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
