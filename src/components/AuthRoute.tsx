import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface myProps {
  children: React.ReactNode;
}

const AuthRoute = (props: myProps) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unaothorized");
        navigate("/login");
      }
    });
    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading....</p>;

  return <div>{children}</div>;
  // /In your specific code, when the user is authenticated (i.e., user is not null), the AuthRoute component returns <div>{children}</div>, which effectively renders the nested components passed as children. This allows the protected routes, such as the ⁡⁢⁣⁣𝗛𝗼𝗺𝗲⁡ component, to be displayed when the user is authenticated.
};

export default AuthRoute;
