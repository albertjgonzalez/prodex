const FBDatabase = {
    getBeats: (database,uid,saveBeats)=>{
        database.ref().child(`users/${uid}/beatpacks`).once('value')
        .then(snapshot => {
            let beats = {}
            let packs = Object.entries(snapshot.toJSON())
            // console.log(packs)
            //  packs.forEach(pack => {
            //     let packURL = Object.values(pack)
            //     let packName = Object.keys(pack)
            //     if(packName.length>1){
            //         for (let [name, url] of Object.entries(pack)) {
            //             beats[name]=url
            //           }
            //     }
            //     else{
            //         beats[packName[0]]=packURL[0]
            //     }
            //  });
             saveBeats(packs)
        })
    },
    addUser: (database, name, email, uid,response) => {
        database.ref('users/' + uid).set({
          name,
          email,
          beatpacks: {}
        }).catch(error=>{
            response(error)
        });
      },
    getUsers: (database,displayUsers)=>{
        database.ref('users/').once('value').then(snapshot=>{
            let users = Object.entries(snapshot.toJSON())
            let userList = []
            users.forEach(user=>{
                userList[user[1][`name`]] = user[1][`email`]
            })
            displayUsers(Object.entries(snapshot.toJSON()))
        })
    }
}

export default FBDatabase;