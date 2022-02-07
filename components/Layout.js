import Head from "next/head";
import React from "react";
import PropTypes from "prop-types"; // ES6

const Layout = ({ title, keywords, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta type="description" content={description} />
                <meta
                    type="keywords"
                    content={keywords.map((elem) => elem.trim()).join(" ,")}
                />
            </Head>
            {children}
        </>
    );
};

Layout.defaultProps = {
  title:'Code Hub - Coworking space Sousse',
  description:"Espace de coworking, refuge pour les créatifs, freelances et startups, avec une vue imprenable sur Sousse.",
  keywords:["sousse","coworking","tunis"]

};

Layout.PropTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
};

export default Layout;
