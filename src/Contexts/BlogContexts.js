import React, { createContext, useState, useEffect, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { BLOG } from '../models';


const BlogContext = createContext({});

const BlogContextProvider = ({ children }) => {
    const [blogsCon, setBlogCon] = useState([]);

    useEffect(() => {
        DataStore.query(BLOG).then(setBlogCon);
    }, [])
    
    return (<BlogContext.Provider value={{ blogsCon }}>{children}</BlogContext.Provider>)
};

export default BlogContextProvider;

export const useBlogContext = () => useContext(BlogContext);

