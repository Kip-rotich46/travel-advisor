import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

import './list.css';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type='list'/>  
      <div className="listContainer">
        <div className="listWrapper"></div>
        <div className="listSearch"></div>
      </div>
    </div>
  )
}

export default List