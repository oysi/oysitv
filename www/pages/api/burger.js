// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const clientID = "b522d691e30227e";
const clientSecret = "887a1f3370b4299e024f244b6bcef10221f2e603";
const token = "6d52fcecde3ae5a6e08ca10b694b613681de8c9a";

export default function handler(req, res) {
	fetch(
		"https://api.imgur.com/3/account/crypto/submissions",
		{
			headers: {
				Authorization: "Client-ID b522d691e30227e",
			}
		}
	)
	.then((res) => {
		console.log(res);
		return res.json();
	})
	.then((data) => {
		// console.log(data.data[0].link);
		res.status(200).json(data.data[0]);
	})
	// res.status(200).json({ name: 'John Doe' })
}

// https://api.imgur.com/oauth2/localhost#access_token=6d52fcecde3ae5a6e08ca10b694b613681de8c9a&expires_in=315360000&token_type=bearer&refresh_token=af541f2b7d72d92d512184f15ffe29a126eda2a9&account_username=Oysi&account_id=10584415

/*
https://api.imgur.com/oauth2/localhost#

access_token=6d52fcecde3ae5a6e08ca10b694b613681de8c9a

&expires_in=315360000

&token_type=bearer

&refresh_token=af541f2b7d72d92d512184f15ffe29a126eda2a9

&account_username=Oysi

&account_id=10584415
*/
