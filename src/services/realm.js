import Realm from 'realm'

import RepositorySchema from '../schemas/RepositorySchemas'

export default function getRelm(){
    return Realm.open({
        schema:[RepositorySchema]
    })
}