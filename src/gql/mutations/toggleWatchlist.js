import {gql} from "apollo-boost";


const toggleWatchlist = gql`
	mutation(
		$id : String
		$isWatched : Boolean 
	){
		toggleWatchlist(
			id : $id
			isWatched : $isWatched
		){
			isWatched
		}

	}

`;


export default toggleWatchlist;