import React from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { url, setToken, setUser } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return <div>Login</div>;
};

export default Login;
