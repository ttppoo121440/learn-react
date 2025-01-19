const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="ml-[255px]">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
