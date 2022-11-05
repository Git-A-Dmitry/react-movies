function Footer() {
  return (
    <>
      <footer className='page-footer blue-grey darken-3'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='https://github.com/Git-A-Dmitry/react-movies' target='_blank' rel='noreferrer'>
            Repository
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
