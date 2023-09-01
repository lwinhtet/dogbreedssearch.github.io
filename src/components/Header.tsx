type PropType = {
  title: string;
};

const Header = ({ title }: PropType) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
