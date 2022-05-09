// import React, { useEffect } from 'react';
// import axiosInstance from '../../axios';
// import { useNavigate } from 'react-router-dom';

// export default function SignOut() {
// 	const history = useNavigate();

// 	useEffect(() => {
// 		axiosInstance.post('token/blacklist/', {
// 			refresh_token: localStorage.getItem('refresh_token'),
// 		});
// 		localStorage.removeItem('access_token');
// 		localStorage.removeItem('refresh_token');
// 		axiosInstance.defaults.headers['Authorization'] = null;
// 		history("/signin", { replace: true });
// 	});
// 	return <div>Logout</div>;
// }
