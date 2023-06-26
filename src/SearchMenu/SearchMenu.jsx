import { useState } from 'react';
import './SearchMenu.css'
import * as Icons from '@iconscout/react-unicons';

const SearchMenu = () => {
  const [search, setSearch] = useState('');
  const [cartItemsCount, setCartItemsCount] = useState(2);

  return (
    <div className={'Container HorizontalContainer SearchMenuContainer'}>
      <div className={'Logo'}>
        <a href="/">
          <img src="https://cdn.bulldogjob.com/system/companies/logos/000/002/424/original/ac-sygnet-200x200.jpg" alt="Logo" height="50px" />
        </a>
      </div>
      <div className={'SearchBar'}>
        <input className={'SearchInput'} value={search} placeholder={"Co chcesz kupić?"} onChange={(e) => setSearch(e.target.value)} />
        <Icons.UilSearch color={"#ff77aa"} />
      </div>
      <div className={'Cart'}>
        <div className={'CartIcon'}>
          <Icons.UilShoppingBag width="35px" height="35px" />
          {cartItemsCount > 0 &&
            <div className='CartItemsCount'>{cartItemsCount}</div>
          }
        </div>
        Twój koszyk
      </div>
    </div>
  )
}

export default SearchMenu;
