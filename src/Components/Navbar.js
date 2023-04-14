import "./navbar.css";

export default function Navbar({ handleSearchChange }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchChange(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div>
      <section>
        <div className="nav">
          <h1 id="title"> Hacker News </h1>
          <div className="searchBox">
            <input
              type="search"
              onKeyDown={handleKeyDown}
              placeholder="search here..."
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </section>
    </div>
  );
}
