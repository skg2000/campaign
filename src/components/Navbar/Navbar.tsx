import { useCallback, useState } from "react";
import "./Navbar.css";
import Icon from "../ui/Icon";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery],
  );

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__search">
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Find influencers to collaborate with"
            aria-label="Search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <span className="navbar__search-icon">
            <Icon name="search" size={16} color="#9CA3AF" />
          </span>
        </div>

        <div className="navbar__actions">
          <button className="navbar__btn-upgrade" type="button">
            <Icon name="sparkle" size={16} />
            Upgrade
          </button>

          <button className="navbar__btn-create" type="button">
            <Icon name="plus" size={16} />
            Create Campaign
          </button>

          <button
            className="navbar__avatar"
            type="button"
            aria-label="User profile"
          >
            <Icon name="user" size={20} />
          </button>

          <button className="navbar__menu" type="button" aria-label="Open menu">
            <Icon name="menu" size={20} color="#374151" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
