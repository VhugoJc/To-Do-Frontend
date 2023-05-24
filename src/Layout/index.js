import TopBar from './TopBar/';

const Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout;