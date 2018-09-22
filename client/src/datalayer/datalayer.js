import axios from 'axios';
const api = process.env.NODE_ENV === 'development' ? axios.create({baseURL: 'http://localhost:3000/'}) : axios.create();

export function getTreeData(uri) {
    return api.get(`/api/trees/${uri}`).catch((err) => {
	return { error: err };
    });
}
