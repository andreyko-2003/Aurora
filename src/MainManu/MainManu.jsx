import './MainManu.css'
import * as Icons from '@iconscout/react-unicons';

const MainManu = () => {
  return (
    <div className={'BottomLine'}>
      <div className={'Container HorizontalContainer'}>
        <div className={'CompanyInfo'}>
          <a href={'tel:+48729845077'}>
              <Icons.UilPhoneVolume color={'#ff0000'} height="20px" />
              729 845 077
          </a>
          <a href={'mailto:andreyko.ishchenko@gmail.com'}>
            <Icons.UilEnvelope color={'#ff0000'} height="20px" />
            andreyko.ishchenko@gmail.com
          </a>
        </div>
        <div className={'Auth'}>
          <a href="/#"><Icons.UilSignin color={'#ff0000'} height="20px" />Zaloguj się</a>
          <a href="/#"><Icons.UilUserPlus color={'#ff0000'} height="20px" />Załóż konto</a>
        </div>
      </div>
    </div>
  )
}

export default MainManu;
