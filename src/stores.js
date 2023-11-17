// // feedbackStore.js
// import { writable } from 'svelte/store';
// import supabase from './config/supabase.js';
// const stores = writable([]);

// // Function to fetch data from the API and update the store
// export async function fetchData() {
//   try {
//     let { data, error } = await supabase
//   			.from('articles')
//               .select(`
//             *,
//             articlestatus(*),
//             authors(*),
//             categories(*),
//             post_type(*),
//             publication(*)
//           `)
//     if (error) {
//     console.log(error);
//     } else {
//     stores.set(data);
//     }

//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();
// export default stores;