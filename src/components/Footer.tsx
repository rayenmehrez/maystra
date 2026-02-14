const Footer = () => {
  return (
    <footer className="bg-background text-foreground/70 py-10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-bold text-foreground mb-3">منهج مايسترا</h3>
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} منهج مايسترا — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
