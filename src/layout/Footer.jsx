const Footer = () => {
  return (
    <footer className="bg-slate-900 px-6 py-6 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© 2026 We Promote. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
