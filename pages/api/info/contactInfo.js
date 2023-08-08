import { client } from "../../../lib/createClient";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { name,email,mobile,date,message,relocationFrom,relocationTo } = data;

  if(!name && !email && !mobile && !message){
    res.status(422).json({
      errorMessage:
        'Invalid input - Please Fill all Inputs Fields.',
    });
  return ;
  }
  if(name.length<2 && mobile.length<2 && message.length<2 && relocationFrom<2 && relocationTo<2 ){
    res.status(422).json({
      errorMessage:
        'Length of all inputs fields must be more than 2 characters',
    });
  return ;
  }
  if(!email ||
    !email.includes('@') || !email.includes('.')){
    res.status(422).json({
      errorMessage:
        'Enterered email is not valid',
    });
  return ;
  }
  else {
   
      const doc = {
        _type: 'contact',
        name: name,
        email: email,
        mobile: mobile,
        message: message,
        date:date,
        relocationFrom:relocationFrom,
        relocationTo:relocationTo
      };
      const response = await client.create(doc);
      res.status(200).json({userData:response ,successMessage: "Your message has been sent. Thank you!" });
     
  }
}

export default handler;