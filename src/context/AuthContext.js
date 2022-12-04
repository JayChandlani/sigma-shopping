import React from 'react';

const AuthContext = React.createContext({
    status: null,
    user: {},
    setModal: () => { },
    modal: null,
    cartProduct: [],
    wishProduct: [],
    setCartProduct: () => { },
    setWishProduct: () => { },
    filterItem: {},
    setFilterItem: () => { }
});

export default AuthContext;
