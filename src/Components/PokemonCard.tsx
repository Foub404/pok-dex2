interface PokemonProps {
	name: "string";
	imgSrc: "string";
}

function PokemonCard({ pokemon }: PokemonProps){
	return (
		<figure>
			<figcaption>
				{pokemon.name}
				{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
