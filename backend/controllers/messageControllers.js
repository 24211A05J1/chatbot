import getGroqChatCompletion from "../models/GroqService";
async function handleChatRequest(req, res){
    const content = req.body.message;
    if(content.trim() === ""){
        return res.status(400).json({error: "Message content is empty"});
    }
    const response = await getGroqChatCompletion(content);
    res.json({response});
}
export default handlemessage;