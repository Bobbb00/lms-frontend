const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
