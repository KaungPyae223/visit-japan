import japanImage from "../../../../public/jp.svg";

const RegionPartner = () => {
  return (
    <div>
      <p className="text-3xl font-semibold text-center">Our Partners</p>
      <p className="text-lg mt-2 text-center">パートナー</p>
      <div className="mt-12 grid grid-cols-2 gap-3">
        <div>
          <img src={japanImage} alt="" />
        </div>
        <div className="flex items-center px-6 flex-wrap justify-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/All_Nippon_Airways_Logo.svg/1280px-All_Nippon_Airways_Logo.svg.png"
            alt=""
            className="h-12 object-cover items-center"
          />
          <img
            src="https://getlogovector.com/wp-content/uploads/2020/09/japan-association-of-travel-agents-jata-logo-vector.png"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://mms.businesswire.com/media/20230104006042/en/1671597/5/hk_logo.jpg?download=1"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://pen-design.jp/wp-content/uploads/2020/05/Hotel_Japan_Logo_s-1024x724.jpg"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://www.ampersandtravel.com/media/842500/logo-japan.png"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGssm59iZJg1qn7_f5jLIfFIPuu09N3YLjHQ&s"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpz7kNC5h837IdwVbEeyBn_xSS32uTskhjA&s"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsMA5fjVFttoaDPd7e-yRKAzDAtSkGvl_6Q&s"
            alt=""
            className="h-24 object-cover items-center"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSszPVndhG-ZHl998pJetz6BV6M_lOermkA&s"
            alt=""
            className="h-24 object-cover items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default RegionPartner;
