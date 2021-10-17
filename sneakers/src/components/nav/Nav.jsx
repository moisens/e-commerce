import './nav.scss';
import { links } from '../../utils/utils';
import { Link } from 'react-router-dom';
import avatar from '../../../public/images/avatar.png'
import logo from '../../../public/images/logo.svg'
import iconcart from '../../../public/images/iconcart.svg'



const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-links-container'>
        <div className='nav-logo'>
          <img src={logo} alt="logo-sneakers" title='sneakers-logo' />
        </div>
        <div className='nav-content'>
          {links.map(link => {
            const { id, text, url } = link;
            return (
              <ul key={id}>
                <li><Link to={url}>{text}</Link></li>
              </ul>
            )
          })}
        </div>
      </div>
      <div className='nav-cart-avatar'>
        <div className='nav-cart'>
          <img src={iconcart} alt="icon-cart" />
          <div className='cart-number-art'>0</div>
        </div>
        <div className="nav-avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  )
}

export default Nav;
