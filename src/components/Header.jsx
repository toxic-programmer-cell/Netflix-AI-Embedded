import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-18 py-2 bg-gradient-to-b from-black z-99">
      <img className="w-45" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
