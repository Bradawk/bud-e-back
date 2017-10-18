

exports.handleSpeechRequest = (req, res) =>{
    let speech_response = req.body.speechObject;
    res.json(speech_response);
}

