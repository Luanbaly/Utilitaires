import { Route, Routes, Link } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import MD5 from "./components/WebDev/MD5";
import Password from "./components/WebDev/Password";
import SHA256 from "./components/WebDev/SHA256";
import What from "./components/WebDev/What";
import _404 from "./components/_404";
import Layout from "./Layout";

const Views = () => {
    return ( 
        <Routes>
            <Route element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/password-generator" element={<Password />} />
            <Route path="/md5-generator" element={<MD5/>} />
            <Route path="/sha256-generator" element={<SHA256/>} />
            <Route path="/what-my-user-agent" element={<What/>} />
            <Route path="*" element={<_404 />} />
            </Route>
        </Routes>
     );
}
 
export default Views;