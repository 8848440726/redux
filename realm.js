import Realm from "realm";

class Book extends Realm.Object{}

Book.schema={
    name:'Book',
    properties:{
        recordid:'int',
        bookname:'string',
        details:'string',
        authername:'string'
    },
    primarykey:'recordid'
}
let realm=new Realm({schema:[Book],schemaVersion:4})

let getallBooks=()=>{
    return realm.objects('Book')
}

let addBook=(_recordid,_bookname,_details,_authername)=>{
    realm.write(()=>{
        realm.create("Book",{
            recordid:_recordid,
            bookname:_bookname,
            details:_details,
            authername:_authername
        })
    })
}

let deleteallBook=()=>{
    realm.write(()=>{
        realm.deleteAll()
    })
}

export default realm;
export{
    getallBooks,addBook,deleteallBook
}