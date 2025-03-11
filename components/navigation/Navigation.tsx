import Navbar from "./Navbar";

//    Reason for the wrapper is in case I need to do any server-side fetches to feed into Navbar.
//    Would rather do it here than in the layout.tsx
const Navigation = () => <Navbar />;

export default Navigation;
