//------ Facades for all Mutations -------//


import createPerson from './mutations/createPerson'
import loginAdmin from './mutations/loginAdmin'
import createAdmin from './mutations/createAdmin'
import toggleWatchlist from './mutations/toggleWatchlist'
import updatePerson from './mutations/updatePerson'
import updateAdmin from './mutations/updateAdmin'

import deletePerson from './mutations/deletePerson'
import deleteAdmin from './mutations/deleteAdmin'
import createDetection from './mutations/createDetection'



export {
		createPerson , 
		loginAdmin ,
		createAdmin,
		toggleWatchlist,
		updatePerson,
		updateAdmin,
		deletePerson,
		deleteAdmin,
		createDetection
	};
