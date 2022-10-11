import { Dashboard, Home, List, Menu, ShoppingCart, Adb} from "@mui/icons-material";

function IconResolver(name) {

    // list of all available icons 
    const icons = {
        default: Dashboard,
        dashboard: Dashboard,
        menu: Menu,
        cart: ShoppingCart,
        home: Home,
        list: List,
        adb: Adb
    }

    // checking if icon which is invoked from a file is available in resolver or not 
    const _icon = icons[name] ? icons[name] : icons['default'];

    // returning a resolved icon to a desired file 
    return(<_icon key={`resolved_icon_${name}`}/>);
}

export default IconResolver;