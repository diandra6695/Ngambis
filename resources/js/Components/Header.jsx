const Header = (props) => {
    return (
        <header className="flex justify-between items-center">
            <h3 className="text-2xl font-black mb-5">{props.text}</h3>
        </header>
    );
};

export default Header;
