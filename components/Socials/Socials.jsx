import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaReddit } from 'react-icons/fa';

export const ReactShare = ({ url, title }) => {
    const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(`${title} ${url}`)}`;
    const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

    return (
        <div className="grid justify-center gap-10 pt-5 lg:flex share-buttons">
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={"50px"} />
            </a>
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={"50px"} />
            </a>
            <a href={whatsappShareUrl}>
                <FaWhatsapp size={"50px"} />
            </a>
            <a href={redditShareUrl} target="_blank" rel="noopener noreferrer">
                <FaReddit size={"50px"} />
            </a>
        </div>
    );
};
