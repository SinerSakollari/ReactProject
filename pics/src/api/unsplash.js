import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID i98ha94X4_ssZnmKzCwnBaQuxBwyc4eWGbmy7QfHPsw'
    }
});