const nodemailer = require('nodemailer')

const ejs = require('ejs')

//creating a transporter

const mailconfigurations={
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'',
        pass:''
        
    }
}

const transporter = nodemailer.createTransport(mailconfigurations)

ejs.renderFile("Templates/welcome.ejs",{name:'john doe'}, async(error,html)=>{
    const mailoptions={
        from: "",
        to: "",
        subject: "Hello",
        text: "Hello world",
        html,
        attachments:[
            {
                filename: 'text.txt',
                content:'hello world',
                contentType:'text/plain'
    
            }
        ]
    }
    try {
        await transporter.sendMail(mailoptions)
        
    } catch (error) {
        console.log(error);
        
    }
    
    })





