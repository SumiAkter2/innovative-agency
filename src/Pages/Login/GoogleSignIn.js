// import React from 'react';
// import auth from '../../firebase.init';
// import Button from '../Button';
// import google from './../../assets/images/Google.jpg'
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// const GoogleSignIn = () => {
//     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//     if (error) {
//         return (
//             <div>
//                 <p>Error: {error.message}</p>
//             </div>
//         );
//     }
//     if (loading) {
//         return <p>Loading...</p>;
//     }
//     if (user) {
//         return (
//             <div>
//                 <p>Signed In User: {user.email}</p>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <Button onClick={() => signInWithGoogle()} className='mx-96 h-screen my-12'><img style={{ 'width': '50px' }} src={google} alt="" /> Log In Google </Button>
//         </div>
//     );
// };

// export default GoogleSignIn;