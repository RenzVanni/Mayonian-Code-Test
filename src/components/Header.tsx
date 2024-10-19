const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between p-3  shadow-sm ">
      <div className="flex items-center space-x-3">
        <img src="/icons/test-menu.png" alt="menu" />
        <img src="/icons/test-logo.png" alt="logo" />
      </div>
      <div className="flex items-center space-x-3">
        <img src="/icons/test-wallet.png" alt="wallet" />
        <p>$1990.6</p>
        <img src="/icons/test-line.png" alt="line" />
        <img src="/icons/test-profile.png" alt="profile" />
      </div>
    </div>
  );
};

export default Header;
