const { useSelector } = require("react-redux")


const useAuth = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated)
}