const ThemeSwitcher = (props) => {
  const { isDark, toggleTheme } = props;

  return (
    <button
      type="button"
      className={isDark ? "btn btn-light" : "btn btn-dark"}
      onClick={() => {
        toggleTheme();
      }}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeSwitcher;
