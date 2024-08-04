import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/324244371.jpg?k=907625a1946744783b301ffb94e0fe4292e3d366e6cc6c8474df7296ea14abb0&o=&hp=1"
        alt="jkiaSeasons"
          className="fpImg"
        />
        <span className="fpName"> Kozi Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/289849381.jpg?k=827d24ecd9b2f63f0b3edabd361090cc7ee4ca31e58f78e0513b204560f1b1d5&o=&hp=1"
        alt="jkiaSeasons"
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
        src="https://nnmedia.nation.africa/uploads/2022/09/KAA-check-in-1320x880.jpg"
          alt="jkiaSeasons"
          className="fpImg"
        />
        <span className="fpName">JKIA Seasons</span>
        <span className="fpCity">Nairobi</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;