import axios from 'axios'

export function getTreeData(uri) {
    axios.get('/trees/uri')
	.then(function (response) {
	    console.log(response);
	})
	.catch(function (error) {
	    console.log(error);
	});
}
