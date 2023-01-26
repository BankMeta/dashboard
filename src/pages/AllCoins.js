import React, { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Coin from "../components/Coin";

const URL =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const AllCoins = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(URL)
			.then((res) => {
				setCoins(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="font-mono bg-gradient-to-r from-slate-100 to-zinc-300">
			<div className="flex flex-row mb-8 pt-4 items-center justify-center space-x-10">
				<form className="justify-self-center">
					<input
						className="w-52 md:w-96 bg-gray-700 text-white outline-none ring-1 md:ring-4 ring-gray-600 focus:ring-black rounded-full px-4 py-2"
						type="text"
						placeholder="Search for Currency"
						onChange={handleChange}
					/>
				</form>
			</div>
			<div className="text-center h-[620px] rounded-md scrollbar-thin scrollbar-thumb-fuchsia-700 scrollbar-track-slate-700">
				{isLoading ? (
					<>
						<BeatLoader color="violet" />
					</>
				) : (
					<>
						<table className="mx-auto">
							<thead>
								<tr className="font-semibold text-lg text-gray-800">
									<td className="pr-8">Symbol</td>
									<td className="pr-8">Name</td>
									<td className="pr-8">Price</td>
									<td className="pr-8">24h% Change</td>
									<td className="invisible sm:visible pr-8">
										24h Volume
									</td>
									<td className="invisible md:visible pr-8">
										Market Cap
									</td>
								</tr>
							</thead>
							<tbody>
								{filteredCoins.map((coin) => {
									return (
										<Coin
											key={coin.id}
											name={coin.name}
											image={coin.image}
											symbol={coin.symbol}
											price={coin.current_price}
											volume={coin.total_volume}
											priceChange={
												coin.price_change_percentage_24h
											}
											marketCap={coin.market_cap}
										/>
									);
								})}
							</tbody>
						</table>
					</>
				)}
			</div>
		</div>
	);
};

export default AllCoins;