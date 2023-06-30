/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs18.x'
};
export const load = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
