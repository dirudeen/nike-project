
const NavigationLinks = ({isActive, navLinks, onToggleHandler}) => {
    const clickHandler = () => {
        if(isActive) {
            onToggleHandler(true)
        }
    }

    return (
      <>
        {isActive && (
          <div
            className="fixed mx-[-4rem] h-[200%] w-screen bg-slate-800 opacity-60 lg:hidden"
            onClick={() => onToggleHandler(true)}
          ></div>
        )}
        <ul
          className={`flex flex-1 gap-16 lg:justify-center ${
            isActive ? "sidebar" : "sidebar-In"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} onClick={clickHandler}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </>
    );
}

export default NavigationLinks;
