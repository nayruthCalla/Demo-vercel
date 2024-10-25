import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Mi Sitio</h1>

        <nav className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          ) : (
            <>
              <img
                src={user.picture}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
