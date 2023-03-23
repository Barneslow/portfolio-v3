import Socials from "./ui/Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between py-10 space-y-4 bg-zinc-100 dark:bg-zinc-800  border-t border-slate-300 dark:slate-300 shadow-sm ">
      <h4 className="text-xl md:text-2xl">
        Living, learning, & leveling up one day at a time.
      </h4>
      <Socials />
      <p className="text-lg">Handcrafted by me! </p>
    </footer>
  );
};

export default Footer;
