import React from 'react';
import Reacr from 'react';

class ImageCard extends React.Component {
    render() {
        const {description, url} = this.props.image;

        return (
            <div>
                <img 
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;