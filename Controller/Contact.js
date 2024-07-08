const Contact = require('../Models/Contact')
const addContact = async(req,res)=>{
    try {
        console.log("hrello");
        const {fname,lname,email,PhoneNo,Message} = req.body;
        const data = new Contact({
            fname:fname,
            lname:lname,
            email:email,
            PhoneNo:PhoneNo,
            Message:Message
        })
        console.log("data = ",data);
        await data.save()
        return res.json({
            status:200,
            message:"Thank you for contacting us!"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status:500,
            message:"Internal Server Error!"
        })
    }

}
module.exports = {addContact}