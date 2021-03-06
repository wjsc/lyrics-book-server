
const getById = (lyricsRef) => (req, res, next)=>{
  res.charSet('utf-8'); 
  lyricsRef.child(req.headers.authorization).child(req.params.id).once("value")
    .then(response=>response.val())
    .then(obj => obj ? obj : {})
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
}

const get = (lyricsRef) => (req, res, next)=>{
  res.charSet('utf-8');
  lyricsRef.child(req.headers.authorization).once("value")
    .then(response=>response.val())
    .then(obj => obj ? obj : {})
    .then(obj => res.send(obj))
    .catch(err => res.send(err));  
}

const insert = (lyricsRef) => (req, res, next)=>{
  res.charSet('utf-8');
  lyricsRef.child(req.headers.authorization).push(req.body)
    .then((response)=>res.send(response))
    .catch(err => res.send(err));
}

const update = (lyricsRef) => (req, res, next)=>{
  res.charSet('utf-8');
  lyricsRef.child(req.headers.authorization).child(req.params.id).set(req.body)
    .then((response)=>res.send(response))
    .catch(err => res.send(err));
}

const remove = (lyricsRef) => (req, res, next)=>{
  res.charSet('utf-8');
  lyricsRef.child(req.headers.authorization).child(req.params.id).remove()
    .then((response)=>res.send(response))
    .catch(err => res.send(err));
}

module.exports={
  getById,
  get,
  insert,
  update,
  remove
}