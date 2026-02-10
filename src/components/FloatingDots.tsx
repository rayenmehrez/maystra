const FloatingDots = () => {
  return (
    <>
      <div className="absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-primary/30 float-dot-1 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-primary/20 float-dot-2 pointer-events-none" />
    </>
  );
};

export const FloatingDotsLight = () => {
  return (
    <>
      <div className="absolute top-[8%] left-[10%] w-16 h-16 rounded-full bg-primary-foreground/15 blur-xl float-dot-1 pointer-events-none" />
      <div className="absolute top-[30%] right-[5%] w-20 h-20 rounded-full bg-primary-foreground/10 blur-2xl float-dot-2 pointer-events-none" />
      <div className="absolute bottom-[15%] left-[20%] w-24 h-24 rounded-full bg-primary-foreground/12 blur-2xl float-dot-1 pointer-events-none" />
      <div className="absolute top-[55%] left-[5%] w-14 h-14 rounded-full bg-primary-foreground/18 blur-xl float-dot-2 pointer-events-none" />
      <div className="absolute bottom-[30%] right-[15%] w-20 h-20 rounded-full bg-primary-foreground/10 blur-3xl float-dot-1 pointer-events-none" />
      <div className="absolute top-[15%] right-[25%] w-12 h-12 rounded-full bg-primary-foreground/14 blur-xl float-dot-2 pointer-events-none" />
    </>
  );
};

export default FloatingDots;
