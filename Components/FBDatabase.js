const FBDatabase = {
    getBeats: (database,uid,saveBeats)=>{
        database.ref().child(`users/${uid}/beatpacks`).once('value')
        .then(snapshot => {
            let beats = {}
            let packs = Object.values(snapshot.toJSON())
             packs.forEach(pack => {
                let packURL = Object.values(pack)
                let packName = Object.keys(pack)
                if(packName.length>1){
                    for (let [name, url] of Object.entries(pack)) {
                        beats[name]=url
                      }
                }
                else{
                    beats[packName[0]]=packURL[0]
                }
             });
             saveBeats(beats)
        })
    }
}

export default FBDatabase;