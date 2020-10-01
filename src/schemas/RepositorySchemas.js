import Repository from "../Repository"

export default class RepositorySchema{
    static schema = {
        name:'Repository',
        primaryKey: 'id',
        properties:{
            id:{type:'int', indexed:true},
            name: 'string',
            fullName:'string',
            description:'string',
            starts: 'int',
            forks:'int',
        },
    }
}