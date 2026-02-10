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
      <div className="absolute top-[12%] left-[15%] w-3 h-3 rounded-full bg-primary-foreground/20 float-dot-1 pointer-events-none" />
      <div className="absolute bottom-[25%] right-[12%] w-2.5 h-2.5 rounded-full bg-primary-foreground/15 float-dot-2 pointer-events-none" />
    </>
  );
};

export default FloatingDots;
