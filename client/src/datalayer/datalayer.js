import axios from 'axios';
const api = process.env.NODE_ENV === 'development' ? axios.create({baseURL: 'http://localhost:3000/'}) : axios.create();

export function getTreeData(uri) {
    api.get(`/api/trees/${uri}`)
	     .then(function (response) {
		 console.log("In the promise:");
		 console.log(response.data);
		 return response.data;
	     })
	     .catch(function (error) {
		 console.log(error);
	     });
}
