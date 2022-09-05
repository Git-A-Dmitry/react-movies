function Footer() {
  return (
    <>
      <footer className="page-footer deep-purple lighten-1">
        {/* <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here.</p>
            </div>
          </div>
        </div> */}
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repository
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };