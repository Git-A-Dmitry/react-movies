function Footer() {
  return (
    <>
      <footer className='footer'>
        {/* <div className='container'> */}
        <div className='footer__content'>
          © {new Date().getFullYear()} All Rights Reserved
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/Git-A-Dmitry/react-movies'
            target='_blank'
            rel='noreferrer'
          >
            Repository
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
