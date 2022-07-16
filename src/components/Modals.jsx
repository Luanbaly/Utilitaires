import { useState } from "react";
import useBus from "use-bus";
import Join from "./Join";
import Login from "./Login";

const Components = {
    join: Join,
    login: Login,
};

export default function Modals() {
    const [data, setData] = useState(null);

    useBus('show', ({ data }) => setData(data), []);

    useBus('hide', () => setData(null), []);

    if (data && Components[data[0]]) {
        // const Comopnent = Components[data[0]];
        // return <Comopnent {...data[1]} />
        return React.createElement(Components[data[0]], data[1]);
    }

    return null;
}